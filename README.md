# Pertama Program Companion

A lightweight, participant-facing companion for Pertama Partners programs.

This release supports the **AI in Operations** program with:

- a 45-question formative practice quiz;
- immediate, option-specific explanations;
- an in-session review pile for missed questions;
- a searchable study guide with vocabulary, examples, explanations, and diagrams;
- no sign-in and no progress saved between sessions.

This is formative practice—not the official ASK assessment—and it does not issue an official score, pass/fail decision, or certificate.

## Participant link

The intended branded address is:

- https://programs.pertamapartners.com/

The GitHub Pages fallback address is:

- https://pertama-partners.github.io/program-companion/

The custom domain is configured separately from this repository so future Program Companion releases can remain independent of the Architect tools and the private client hub.

## Local preview

Because this is a dependency-free static site, open `index.html` directly in a browser or serve this folder with any static web server.

## Publishing

A GitHub Actions workflow validates the required runtime files and deploys the repository to GitHub Pages whenever `main` changes.

## Privacy boundary

This public repository contains only participant-safe runtime files. Do not add client names, live client data, assessment keys, internal feedback keys, credentials, or participant results.
