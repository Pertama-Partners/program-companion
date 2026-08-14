#!/usr/bin/env node

import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, extname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import "../questions.js";

const questions = globalThis.PertamaQuizQuestions;

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const siteDirectory = resolve(scriptDirectory, "..");
const publishableRoots = new Set([
  "index.html",
  "styles.css",
  "app.js",
  "quiz-engine.js",
  "questions.js",
  "vercel.json",
  "study-guide/index.html",
  "study-guide/study-guide.js",
  "repository/index.html",
]);
const sourceFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "quiz-engine.js",
  "questions.js",
  "vercel.json",
  "study-guide/index.html",
  "study-guide/study-guide.js",
  "repository/index.html",
];

function fail(message) {
  throw new Error(message);
}

async function assertFile(path, label = relative(siteDirectory, path)) {
  try {
    const details = await stat(path);
    if (!details.isFile() || details.size === 0) fail(`${label} is missing or empty.`);
  } catch (error) {
    if (error?.code === "ENOENT") fail(`Missing required file: ${label}.`);
    throw error;
  }
}

function localReferences(source, expression) {
  return [...source.matchAll(expression)]
    .map((match) => match[1].trim())
    .filter((reference) => reference && !/^(?:[a-z]+:|\/|#)/i.test(reference));
}

function resolveLocalReference(baseDirectory, reference) {
  const target = resolve(baseDirectory, reference);
  return reference.endsWith("/") ? resolve(target, "index.html") : target;
}

function validateDataset() {
  if (questions.length !== 45) fail(`Expected 45 questions; found ${questions.length}.`);
  if (new Set(questions.map((question) => question.id)).size !== 45) fail("Question IDs are not unique.");

  let options = 0;
  let explanations = 0;
  for (const [index, question] of questions.entries()) {
    const expectedId = `QP-${String(index + 1).padStart(3, "0")}`;
    if (question.id !== expectedId) fail(`Expected ${expectedId}; found ${question.id}.`);
    if (question.options.length !== 4) fail(`${question.id} does not have four options.`);
    if (!question.options.some((option) => option.key === question.correctAnswer)) {
      fail(`${question.id} has no matching correct option.`);
    }
    if (!question.coreReason.trim()) fail(`${question.id} has no governing principle.`);
    options += question.options.length;
    explanations += question.options.filter((option) => option.feedback?.trim()).length;
  }

  if (options !== 180 || explanations !== 180) {
    fail(`Expected 180 options and explanations; found ${options} and ${explanations}.`);
  }
}

async function validatePublicBundle() {
  const contents = await Promise.all(sourceFiles.map((file) => readFile(resolve(siteDirectory, file), "utf8")));
  const runtimeContents = contents.filter((_, index) => sourceFiles[index] !== "repository/index.html");
  const bundle = runtimeContents.join("\n");
  const forbidden = [
    [/(?:local|session)Storage\s*[.(]/i, "browser storage API"],
    [/indexedDB/i, "IndexedDB"],
    [/document\.cookie/i, "cookies"],
    [/\bfetch\s*\(/i, "fetch"],
    [/XMLHttpRequest/i, "XMLHttpRequest"],
    [/sendBeacon/i, "analytics beacon"],
    [/https?:\/\/(?!openapi\.vercel\.sh)/i, "external runtime URL"],
    [/internal-repository-candidate/i, "internal repository path"],
    [/assessment-practice-bank/i, "facilitator-key filename"],
    [/source anchor/i, "source anchor"],
    [/\*\*Trace:/i, "internal trace label"],
  ];
  for (const [pattern, label] of forbidden) {
    if (pattern.test(bundle)) fail(`Public bundle contains forbidden ${label}.`);
  }

  const indexHtml = contents[0];
  const styles = contents[1];
  const appSource = contents[2];
  if (!/<meta\s+name="robots"\s+content="noindex, nofollow"/i.test(indexHtml)) {
    fail("The quiz is missing its noindex directive.");
  }
  if (indexHtml.includes('type="module"') || indexHtml.includes("type='module'")) {
    fail("The quiz must use classic scripts so it also works when index.html is opened directly.");
  }
  const scriptOrder = ["quiz-engine.js", "questions.js", "app.js"];
  const scriptPositions = scriptOrder.map((script) => indexHtml.indexOf(`src="${script}"`));
  if (scriptPositions.some((position) => position === -1) || scriptPositions.some((position, index) => index > 0 && position < scriptPositions[index - 1])) {
    fail("Quiz scripts must load in engine, question-data, app order.");
  }
  if (!indexHtml.includes("No sign-in · no answers saved")) fail("The no-persistence notice is missing.");
  if (!appSource.includes("not an official score or readiness judgment")) {
    fail("The formative summary boundary is missing.");
  }
  if (!styles.includes("@media (prefers-reduced-motion: reduce)")) fail("Reduced-motion CSS is missing.");
  if (!styles.includes("min-height: 44px")) fail("The 44px target rule is missing.");

  const guideIndexHtml = await readFile(resolve(siteDirectory, "study-guide/index.html"), "utf8");
  const guideSource = await readFile(resolve(siteDirectory, "study-guide/study-guide.js"), "utf8");
  if (!/<meta\s+name="robots"\s+content="noindex, nofollow"/i.test(guideIndexHtml)) {
    fail("The study guide is missing its noindex directive.");
  }
  if (!guideSource.includes("Key vocabulary") || !guideSource.includes("15")) {
    fail("The study guide vocabulary section is missing.");
  }
  if (!guideSource.includes("The controlled work loop") || !guideSource.includes("The data boundary")) {
    fail("The study guide diagrams are missing.");
  }

  const repositoryIndexHtml = await readFile(resolve(siteDirectory, "repository/index.html"), "utf8");
  if (!/<meta\s+name="robots"\s+content="noindex, nofollow"/i.test(repositoryIndexHtml)) {
    fail("The program resources page is missing its noindex directive.");
  }
  if (!repositoryIndexHtml.includes("Participant-safe files") || !repositoryIndexHtml.includes("program-companion")) {
    fail("The program resources page is missing its participant-safe repository section.");
  }
  if ((repositoryIndexHtml.match(/https:\/\/github\.com\/Pertama-Partners\/program-companion/g) ?? []).length < 5) {
    fail("The program resources page is missing its GitHub source links.");
  }

  const htmlReferences = localReferences(indexHtml, /(?:href|src)=["']([^"']+)["']/gi);
  const styleReferences = localReferences(styles, /url\(["']?([^"')]+)["']?\)/gi);
  for (const reference of [...htmlReferences, ...styleReferences]) {
    const target = resolveLocalReference(siteDirectory, reference);
    const siteRelative = relative(siteDirectory, target);
    if (siteRelative === ".." || siteRelative.startsWith(`..${sep}`)) {
      fail(`Reference escapes the quiz folder: ${reference}.`);
    }
    await assertFile(target, reference);
  }

  const guideReferences = localReferences(guideIndexHtml, /(?:href|src)=["']([^"']+)["']/gi);
  for (const reference of guideReferences) {
    const target = resolveLocalReference(resolve(siteDirectory, "study-guide"), reference);
    const siteRelative = relative(siteDirectory, target);
    if (siteRelative === ".." || siteRelative.startsWith(`..${sep}`)) {
      fail(`Study guide reference escapes the quiz folder: ${reference}.`);
    }
    await assertFile(target, reference);
  }

  const repositoryReferences = localReferences(repositoryIndexHtml, /(?:href|src)=["']([^"']+)["']/gi);
  for (const reference of repositoryReferences) {
    const target = resolveLocalReference(resolve(siteDirectory, "repository"), reference);
    const siteRelative = relative(siteDirectory, target);
    if (siteRelative === ".." || siteRelative.startsWith(`..${sep}`)) {
      fail(`Program resources reference escapes the quiz folder: ${reference}.`);
    }
    await assertFile(target, reference);
  }
}

function isPublishable(path) {
  const siteRelative = relative(siteDirectory, path).split(sep).join("/");
  return publishableRoots.has(siteRelative) || siteRelative.startsWith("assets/");
}

function fileForRequest(requestTarget) {
  const pathname = decodeURIComponent(new URL(requestTarget, "http://127.0.0.1").pathname);
  const requestPath = pathname === "/" || pathname === "/index.html"
    ? "index.html"
    : pathname.endsWith("/")
      ? `${pathname.slice(1)}index.html`
      : pathname.slice(1);
  const target = resolve(siteDirectory, requestPath);
  const siteRelative = relative(siteDirectory, target);
  if (siteRelative === ".." || siteRelative.startsWith(`..${sep}`)) return null;
  return isPublishable(target) ? target : null;
}

function contentType(path) {
  return {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".woff2": "font/woff2",
  }[extname(path)] ?? "application/octet-stream";
}

async function createStaticServer(port = 0) {
  const server = createServer(async (request, response) => {
    try {
      const file = fileForRequest(request.url ?? "/");
      if (!file || !["GET", "HEAD"].includes(request.method ?? "")) {
        response.writeHead(file ? 405 : 404).end();
        return;
      }
      const body = request.method === "HEAD" ? undefined : await readFile(file);
      response.writeHead(200, { "content-type": contentType(file) }).end(body);
    } catch (error) {
      response.writeHead(error?.code === "ENOENT" ? 404 : 500).end();
    }
  });
  await new Promise((resolveServer, rejectServer) => {
    server.once("error", rejectServer);
    server.listen(port, "127.0.0.1", resolveServer);
  });
  return server;
}

async function validateRoutes() {
  const server = await createStaticServer();
  const address = server.address();
  const origin = `http://127.0.0.1:${address.port}`;
  try {
    const paths = [
      "/",
      "/styles.css",
      "/app.js",
      "/quiz-engine.js",
      "/questions.js",
      "/study-guide/",
      "/study-guide/study-guide.js",
      "/repository/",
    ];
    for (const path of paths) {
      const response = await fetch(origin + path);
      if (!response.ok) fail(`${path} returned ${response.status}.`);
    }
    const hiddenSource = await fetch(`${origin}/scripts/build-question-data.mjs`);
    if (hiddenSource.status !== 404) fail("Internal generation scripts are publicly served by the verifier.");
  } finally {
    await new Promise((resolveClose) => server.close(resolveClose));
  }
}

async function serve(port) {
  const server = await createStaticServer(port);
  console.log(`Serving the verified quiz at http://127.0.0.1:${server.address().port}/`);
}

async function main() {
  await Promise.all(sourceFiles.map((file) => assertFile(resolve(siteDirectory, file))));
  validateDataset();
  await validatePublicBundle();
  await validateRoutes();
  console.log("Quiz verification passed: content, privacy, local assets, accessibility hooks, and static routes.");

  const serveIndex = process.argv.indexOf("--serve");
  if (serveIndex !== -1) {
    const port = Number(process.argv[serveIndex + 1] ?? 4173);
    if (!Number.isInteger(port) || port < 1 || port > 65535) fail("--serve requires a valid port.");
    await serve(port);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
