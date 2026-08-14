const app = document.querySelector("#study-guide-app");

const concepts = Object.freeze([
  {
    number: "01",
    title: "Proactive operations management",
    outcome: "Insight, forecasting, and resilience",
    outcomeKey: "insight",
    definition: "Use leading signals to identify a future shortage, delay, or failure early enough for an owner to act.",
    example: "A maintenance team combines usage history, replenishment lead times, and seasonal work patterns to flag a likely parts gap before stock reaches zero.",
    explanation: "The strongest response prevents or prepares. A faster message after the shortage arrives may improve reaction time, but it is still reactive.",
    lens: "Look for evidence that moves the decision earlier.",
  },
  {
    number: "02",
    title: "The Zero-Paperwork Office",
    outcome: "Documentation and administration",
    outcomeKey: "documentation",
    definition: "Extract and structure information once at the source boundary, then route exceptions for review instead of retyping the same fields.",
    example: "An approved delivery record becomes a structured draft; uncertain fields are marked for a human check before the controlled register is updated.",
    explanation: "Proofreading a second round of manual entry does not remove the bottleneck. The improvement is a safer path from source document to approved system.",
    lens: "Ask where the information already exists and whether it can be safely reused.",
  },
  {
    number: "03",
    title: "Lean 2.0, Muda, and flow",
    outcome: "Lean diagnosis and service recovery",
    outcomeKey: "flow",
    definition: "Find waiting, repetition, unnecessary movement, over-processing, and lost ownership in the flow of work.",
    example: "An approval request leaves a shared inbox for an owned digital queue with status, a reviewer, and an escalation timer; the supervisor still owns the approval.",
    explanation: "Good automation reduces waste without deleting accountability. Predicting who is busy or sending an apology does not repair a waiting handoff.",
    lens: "Name the wasted step before choosing the tool.",
  },
  {
    number: "04",
    title: "Risk-adjusted procurement",
    outcome: "Insight, forecasting, and resilience",
    outcomeKey: "insight",
    definition: "Compare price alongside lead time, quality, supplier stability, concentration, cyber or geopolitical exposure, and available alternatives.",
    example: "A supplier view shows the lowest-price option beside delivery reliability, failure impact, and a credible fallback before the procurement owner decides.",
    explanation: "The lowest price is only one input. A resilient choice makes the cost of failure and the available alternatives visible.",
    lens: "If the cheapest supplier fails, what evidence tells the owner how exposed the operation is?",
  },
  {
    number: "05",
    title: "Precision demand forecasting",
    outcome: "Insight, forecasting, and resilience",
    outcomeKey: "insight",
    definition: "Combine relevant internal history with external signals to support a future inventory, staffing, or capacity decision.",
    example: "Usage history is reviewed alongside seasonality, weather, or a known event, with the forecast period, assumptions, uncertainty, and review date shown.",
    explanation: "A forecast is useful when it changes a decision. Missing data should be labelled as an uncertainty, not silently converted into false precision.",
    lens: "Which signal could change demand, and how will the team verify it before acting?",
  },
  {
    number: "06",
    title: "AI-supported logistics and rostering",
    outcome: "Insight, forecasting, and resilience",
    outcomeKey: "insight",
    definition: "Recompute feasible routes or schedules against changing constraints and show the trade-offs between options.",
    example: "A dispatch plan is recalculated when traffic, delivery windows, staff availability, or priority jobs change, then a coordinator chooses among feasible options.",
    explanation: "The right output changes the plan against real constraints. A late-delivery message may be useful later, but it is not the routing decision.",
    lens: "What must the plan satisfy, and what changes when one constraint moves?",
  },
  {
    number: "07",
    title: "AI-driven root-cause analysis",
    outcome: "Lean diagnosis and service recovery",
    outcomeKey: "flow",
    definition: "Use relevant process evidence to test competing explanations instead of treating a repeated symptom as a confirmed cause.",
    example: "Recurring equipment faults are compared with temperature, speed, timing, and process conditions to distinguish a likely trigger from a coincidence.",
    explanation: "Counting incidents describes the problem. Root-cause work identifies the evidence that would make one explanation stronger than another.",
    lens: "What observation would distinguish the likely cause from the visible symptom?",
  },
  {
    number: "08",
    title: "Instant service recovery",
    outcome: "Lean diagnosis and service recovery",
    outcomeKey: "flow",
    definition: "Pair an operational remedy with a specific, accurate communication that acknowledges the failure and names the next step.",
    example: "A case summary gathers the known facts, prepares a personalised update, and routes any refund, credit, or commitment to an authorised human.",
    explanation: "Empathy without a remedy is incomplete, while a fast draft is not permission to make a consequential commitment.",
    lens: "Does the response cover the failure, remedy, next step, and owner?",
  },
  {
    number: "09",
    title: "Insight-driven operations",
    outcome: "Insight, forecasting, and resilience",
    outcomeKey: "insight",
    definition: "Turn fragmented operational data into a reconciled view that supports a named decision and makes quality gaps visible.",
    example: "Several spreadsheets are combined, units and dates are reconciled, missing coverage is shown, and the resulting exceptions view goes to an operations owner.",
    explanation: "A larger report is not automatically insight. The view earns its place by making a decision, threshold, or next question easier to act on.",
    lens: "What decision will this consolidated view support?",
  },
  {
    number: "10",
    title: "Personalised BI assistants",
    outcome: "Insight, forecasting, and resilience",
    outcomeKey: "insight",
    definition: "Surface the smallest useful set of role-specific signals, trends, and anomalies tied to decisions that person can make.",
    example: "An operations lead sees late-work exceptions, service-level trend, threshold, source period, and owner instead of a generic wall of metrics.",
    explanation: "Personalisation is not more numbers or invented metrics. It connects a role, a decision, a signal, and a credible next question.",
    lens: "Which few signals would actually change this role's next decision?",
  },
  {
    number: "11",
    title: "PDPA and responsible data preparation",
    outcome: "PDPA, ethics, and human oversight",
    outcomeKey: "governance",
    definition: "Use the minimum necessary data through an approved route, with appropriate purpose, access, security, retention, and vendor controls.",
    example: "A team tests a forecast with synthetic or sanitised records and withholds raw personal data that the task does not require.",
    explanation: "A vendor's deletion promise is not the same as organisational approval. Treat the data boundary as part of the work design; this is practical course guidance, not legal advice.",
    lens: "What is the minimum approved input, and what must be withheld or transformed?",
  },
  {
    number: "12",
    title: "Human-in-the-Loop governance",
    outcome: "PDPA, ethics, and human oversight",
    outcomeKey: "governance",
    definition: "Keep an accountable, qualified human review and final decision before a high-consequence commitment, release, or escalation.",
    example: "An AI alert surfaces a possible safety deviation; a qualified reviewer verifies the evidence and decides whether to release, correct, stop, or escalate.",
    explanation: "Human oversight is a real gate with a named decision owner. Asking another AI to approve the result is not a human control.",
    lens: "Who can approve, what must they inspect, and when must the workflow stop?",
  },
  {
    number: "13",
    title: "24/7 quality assurance",
    outcome: "PDPA, ethics, and human oversight",
    outcomeKey: "governance",
    definition: "Define a standard, monitor a signal, set an exception threshold, identify the verifier, and specify the action when the threshold is crossed.",
    example: "A checklist or sensor signal raises an exception with the changed value, standard, verifier, response, and stop or fallback route attached.",
    explanation: "An alert is only useful when someone knows what changed, what to check, and what happens next. Complex safety or quality matters should not be silently self-cleared.",
    lens: "What standard is monitored, what counts as an exception, and who verifies it?",
  },
  {
    number: "14",
    title: "AI Strategy Canvas and staged adoption",
    outcome: "Strategy and adoption",
    outcomeKey: "strategy",
    definition: "Bound a small, owned test with a value hypothesis, baseline, measure, risk, control, dependency, and next decision before scaling.",
    example: "A team tests one repeatable workflow for 30 days, measures time and quality together, then decides whether to expand, revise, transfer, or stop.",
    explanation: "Adoption evidence comes from a controlled workflow, not from collecting tools. A simple test can be high value when the decision after it is clear.",
    lens: "What is the smallest valuable test, who owns it, and what decision follows?",
  },
  {
    number: "15",
    title: "Predictive inventory resilience and waste reduction",
    outcome: "Insight, forecasting, and resilience",
    outcomeKey: "insight",
    definition: "Balance excess, expiry, and emergency shortage by connecting demand, usage, expiry, replenishment lead time, and operational constraints.",
    example: "A prioritised risk queue shows expiring stock and likely shortages together, with an owner reviewing the purchasing, redeployment, or service decision.",
    explanation: "The strongest response improves the system balance. A cheaper emergency courier or a disciplinary message may address a symptom without reducing waste or shortage.",
    lens: "Which signals explain both waste and shortage, and what reviewed action improves the balance?",
  },
]);

const filters = Object.freeze([
  { key: "all", label: "All concepts" },
  { key: "documentation", label: "Documentation" },
  { key: "insight", label: "Insight & forecasting" },
  { key: "flow", label: "Flow & recovery" },
  { key: "governance", label: "Governance" },
  { key: "strategy", label: "Strategy" },
]);

let activeFilter = "all";
let searchTerm = "";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}

function resourceNavMarkup() {
  return `
    <div class="guide-resource-links">
      <a class="button button-primary" href="../">Take the practice quiz <span aria-hidden="true">→</span></a>
      <a class="text-link" href="../repository/">Browse program resources <span aria-hidden="true">↗</span></a>
    </div>`;
}

function methodMarkup() {
  const methodSteps = [
    ["01", "Name the work problem", "Is this a delay, missing signal, root cause, service failure, governance risk, or adoption problem?"],
    ["02", "Match the AI use", "Does the response use the right evidence and produce a useful operational output?"],
    ["03", "Keep ownership visible", "Who reviews the result, what source or boundary matters, and when does the workflow stop?"],
  ];

  return `
    <section class="guide-method section-rule" id="method" aria-labelledby="method-title">
      <div class="section-heading">
        <p class="eyebrow"><span aria-hidden="true">01</span> The reasoning lens</p>
        <h2 id="method-title">Three questions<br /><em>before the answer.</em></h2>
      </div>
      <div class="method-list">
        ${methodSteps.map(([number, title, copy]) => `
          <article class="method-step">
            <span class="method-number">${number}</span>
            <div>
              <h3>${title}</h3>
              <p>${copy}</p>
            </div>
          </article>`).join("")}
      </div>
    </section>`;
}

function loopDiagramMarkup() {
  return `
    <div class="study-diagram diagram-loop" data-loop-diagram>
      <div class="diagram-label">The controlled work loop</div>
      <div class="diagram-flow diagram-flow-primary" aria-label="Frame, feed, contract, and run">
        <span class="flow-node">Frame</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node">Feed</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node">Contract</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node flow-node-dark">Run</span>
      </div>
      <div class="diagram-flow diagram-flow-secondary" aria-label="Evaluate, decide, iterate, and prove">
        <span class="flow-node">Evaluate</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node flow-node-gold">Decide</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node">Iterate</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node">Prove</span>
      </div>
      <div class="diagram-return" aria-hidden="true"><span>↺</span> revise the next run with what you learned</div>
      <p class="diagram-caption">The output is not the finish line. Evaluation and a human decision create the return path.</p>
    </div>`;
}

function controlDiagramMarkup() {
  return `
    <div class="study-diagram diagram-control">
      <div class="diagram-label">The control chain</div>
      <div class="diagram-flow" aria-label="Signal, verify, assess, assign, close">
        <span class="flow-node">Signal</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node">Verify</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node flow-node-dark">Assess</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node flow-node-gold">Assign</span><span class="flow-arrow" aria-hidden="true">→</span>
        <span class="flow-node">Close</span>
      </div>
      <p class="diagram-caption">A useful signal becomes operational only when it is checked, assessed, owned, and closed.</p>
    </div>`;
}

function boundaryDiagramMarkup() {
  return `
    <div class="study-diagram diagram-boundary">
      <div class="diagram-label">The data boundary</div>
      <div class="boundary-frame">
        <div class="boundary-outside">
          <span class="boundary-stop">STOP / TRANSFORM</span>
          <strong>Raw or unnecessary data</strong>
          <small>Restricted records · extra fields · unapproved route</small>
        </div>
        <div class="boundary-inside">
          <span class="boundary-approved">APPROVED INPUT</span>
          <strong>Minimum necessary packet</strong>
          <small>Purpose · source · owner · retention · review</small>
        </div>
      </div>
      <p class="diagram-caption">Data minimisation is a design decision before the AI run, not a clean-up step after it.</p>
    </div>`;
}

function diagramsMarkup() {
  return `
    <section class="guide-diagrams section-rule" id="diagrams" aria-labelledby="diagrams-title">
      <div class="section-heading section-heading-wide">
        <p class="eyebrow"><span aria-hidden="true">02</span> See the system</p>
        <h2 id="diagrams-title">Good AI work is a loop,<br /><em>not a clever prompt.</em></h2>
        <p class="section-lede">Use these three maps to place each question in the operating system around the model: evidence in, output checked, decision owned.</p>
      </div>
      <div class="diagram-grid">
        <div class="diagram-feature">
          ${loopDiagramMarkup()}
          <button class="button button-quiet diagram-toggle" type="button" data-action="reveal-loop" aria-expanded="false">
            Reveal the control layer <span aria-hidden="true">+</span>
          </button>
        </div>
        ${controlDiagramMarkup()}
        ${boundaryDiagramMarkup()}
      </div>
    </section>`;
}

function vocabularyCardMarkup(concept) {
  const searchIndex = [concept.title, concept.outcome, concept.definition, concept.example, concept.explanation, concept.lens].join(" ").toLowerCase();
  return `
    <article class="vocabulary-entry" data-concept data-outcome="${concept.outcomeKey}" data-search="${escapeHtml(searchIndex)}">
      <div class="vocabulary-topline">
        <span class="vocabulary-number">${concept.number}</span>
        <span class="vocabulary-outcome">${escapeHtml(concept.outcome)}</span>
      </div>
      <h3>${escapeHtml(concept.title)}</h3>
      <p class="vocabulary-definition"><span>Definition</span>${escapeHtml(concept.definition)}</p>
      <details>
        <summary>See example and explanation <span aria-hidden="true">+</span></summary>
        <div class="vocabulary-detail">
          <div>
            <p class="detail-label">Example</p>
            <p>${escapeHtml(concept.example)}</p>
          </div>
          <div>
            <p class="detail-label">Why it matters</p>
            <p>${escapeHtml(concept.explanation)}</p>
          </div>
          <div class="vocabulary-lens">
            <p class="detail-label">Question lens</p>
            <p>${escapeHtml(concept.lens)}</p>
          </div>
        </div>
      </details>
    </article>`;
}

function vocabularyMarkup() {
  return `
    <section class="guide-vocabulary section-rule" id="vocabulary" aria-labelledby="vocabulary-title">
      <div class="section-heading section-heading-wide">
        <p class="eyebrow"><span aria-hidden="true">03</span> Key vocabulary</p>
        <h2 id="vocabulary-title">Know the term.<br /><em>See it in the work.</em></h2>
        <p class="section-lede">Each concept has a participant-facing definition, a synthetic operations example, and the reasoning lens to carry into a new scenario.</p>
      </div>
      <div class="vocabulary-tools" aria-label="Filter study guide concepts">
        <label class="search-field">
          <span class="sr-only">Search concepts</span>
          <input type="search" id="concept-search" placeholder="Search a term, example, or idea" autocomplete="off" />
          <span aria-hidden="true">⌕</span>
        </label>
        <div class="filter-row" role="group" aria-label="Filter by learning area">
          ${filters.map((filter) => `
            <button class="filter-button ${filter.key === "all" ? "is-active" : ""}" type="button" data-filter="${filter.key}" aria-pressed="${filter.key === "all"}">
              ${filter.label}
            </button>`).join("")}
        </div>
        <p class="vocabulary-count" aria-live="polite"><span id="vocabulary-visible-count">15</span> of 15 concepts shown</p>
      </div>
      <div class="vocabulary-list">
        ${concepts.map(vocabularyCardMarkup).join("")}
      </div>
      <p class="empty-state" data-empty-state hidden>No concept matches that search yet. Try a broader term or clear the filter.</p>
    </section>`;
}

function guideMarkup() {
  return `
    <section class="guide-hero" aria-labelledby="guide-title">
      <div class="guide-hero-copy">
        <p class="eyebrow"><span aria-hidden="true">00</span> Participant field guide</p>
        <h1 id="guide-title" tabindex="-1">Understand the work.<br /><em>Then choose the answer.</em></h1>
        <p class="guide-hero-lede">A compact companion to the practice quiz: vocabulary, definitions, examples, and simple maps for the judgments behind AI in Operations.</p>
        <div class="guide-hero-actions">
          ${resourceNavMarkup()}
          <a class="text-link" href="#vocabulary">Browse the vocabulary <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <aside class="guide-hero-note" aria-label="How to use this guide">
        <p class="rail-kicker">Use it in three passes</p>
        <ol class="guide-pass-list">
          <li><span>01</span><p>Read the loop before memorising terms.</p></li>
          <li><span>02</span><p>Open the concept that matches the scenario.</p></li>
          <li><span>03</span><p>Return to practice and explain the why.</p></li>
        </ol>
        <p class="formative-note">This is formative preparation. It is not the official ASK assessment, official scoring, or a certificate route.</p>
      </aside>
    </section>
    ${methodMarkup()}
    ${diagramsMarkup()}
    ${vocabularyMarkup()}
    <section class="guide-close section-rule" aria-labelledby="close-title">
      <div>
        <p class="eyebrow"><span aria-hidden="true">04</span> Put it to work</p>
        <h2 id="close-title">Keep the principle,<br /><em>not the letter.</em></h2>
      </div>
      <div class="guide-close-copy">
        <p>When you miss a question, name the work problem, identify the tempting mismatch, state the stronger principle, and apply the boundary: reviewer, source check, stop condition, or next action.</p>
        <a class="button button-primary button-large" href="../">Start the practice quiz <span aria-hidden="true">→</span></a>
      </div>
    </section>`;
}

function updateVocabulary() {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll("[data-concept]").forEach((entry) => {
    const matchesFilter = activeFilter === "all" || entry.dataset.outcome === activeFilter;
    const matchesSearch = !normalizedSearch || entry.dataset.search.includes(normalizedSearch);
    const isVisible = matchesFilter && matchesSearch;
    entry.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  document.querySelector("#vocabulary-visible-count").textContent = visibleCount;
  document.querySelector(".empty-state").hidden = visibleCount !== 0;
}

function bindGuideInteractions() {
  document.querySelector("#concept-search")?.addEventListener("input", (event) => {
    searchTerm = event.currentTarget.value;
    updateVocabulary();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      updateVocabulary();
    });
  });

  document.querySelector("[data-action='reveal-loop']")?.addEventListener("click", (event) => {
    const diagram = document.querySelector("[data-loop-diagram]");
    const button = event.currentTarget;
    const isRevealed = diagram.classList.toggle("is-revealed");
    button.setAttribute("aria-expanded", String(isRevealed));
    button.innerHTML = isRevealed
      ? 'Hide the control layer <span aria-hidden="true">−</span>'
      : 'Reveal the control layer <span aria-hidden="true">+</span>';
  });
}

app.innerHTML = guideMarkup();
bindGuideInteractions();
