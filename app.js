const {
  continueQuiz: advanceQuiz,
  createQuizState: makeQuizState,
  restartQuiz: resetQuiz,
  startQuiz: beginQuiz,
  startReview: beginReview,
  submitAnswer: recordAnswer,
} = globalThis.PertamaQuizEngine;
const questions = globalThis.PertamaQuizQuestions;

const app = document.querySelector("#quiz-app");
const resetButton = document.querySelector("#reset-button");
const reviewStatus = document.querySelector("#review-status");
const questionById = new Map(questions.map((question) => [question.id, question]));

let state = makeQuizState(questions.map((question) => question.id));

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}

function plural(count, singular, pluralForm = `${singular}s`) {
  return count === 1 ? singular : pluralForm;
}

function moveFocus(selector) {
  window.requestAnimationFrame(() => document.querySelector(selector)?.focus());
}

function progressMarkup() {
  const total = questions.length;

  if (state.mode === "review") {
    const completed = state.reviewStartCount - state.missedIds.length;
    const percent = state.reviewStartCount === 0 ? 0 : (completed / state.reviewStartCount) * 100;
    return `
      <div class="progress-block" aria-label="Review progress">
        <div class="progress-copy">
          <span>Review pile</span>
          <strong>${state.missedIds.length} ${plural(state.missedIds.length, "concept")} remaining</strong>
        </div>
        <div
          class="progress-track"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="${state.reviewStartCount}"
          aria-valuenow="${completed}"
          aria-valuetext="${state.missedIds.length} concepts remaining"
        >
          <span style="width: ${percent}%"></span>
        </div>
      </div>`;
  }

  const currentNumber = state.phase === "feedback"
    ? state.answeredCount
    : Math.min(state.answeredCount + 1, total);
  const percent = (state.answeredCount / total) * 100;
  return `
    <div class="progress-block" aria-label="First-pass progress">
      <div class="progress-copy">
        <span>First pass</span>
        <strong>Question ${currentNumber} of ${total}</strong>
      </div>
      <div
        class="progress-track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="${total}"
        aria-valuenow="${state.answeredCount}"
        aria-valuetext="${state.answeredCount} of ${total} questions answered"
      >
        <span style="width: ${percent}%"></span>
      </div>
    </div>`;
}

function introMarkup() {
  return `
    <section class="screen intro-screen" aria-labelledby="intro-title">
      <div class="intro-copy">
        <p class="eyebrow"><span aria-hidden="true">01</span> Course-wide practice</p>
        <h1 id="intro-title" tabindex="-1">Practice the principles.<br /><em>Keep the judgment.</em></h1>
        <p class="intro-lede">
          Work through 45 original scenarios. Each answer unlocks a short explanation, and anything
          you miss moves into a review pile for this session.
        </p>
        <button class="button button-primary button-large" type="button" data-action="start">
          Start the practice quiz <span aria-hidden="true">→</span>
        </button>
      </div>

      <aside class="briefing-rail" aria-label="How this practice works">
        <p class="rail-kicker">Before you begin</p>
        <ol class="briefing-list">
          <li><span>01</span><p><strong>Choose one best response.</strong> Your answer locks as soon as you select it.</p></li>
          <li><span>02</span><p><strong>Read the reasoning.</strong> Wrong answers explain both the mismatch and the stronger choice.</p></li>
          <li><span>03</span><p><strong>Clear your review pile.</strong> Retry only the concepts you missed.</p></li>
        </ol>
        <div class="privacy-note">
          <span aria-hidden="true"></span>
          <p><strong>Nothing is retained.</strong> Refreshing or closing this page clears all progress.</p>
        </div>
        <p class="formative-note">This is formative practice, not an official score, pass/fail result, or prediction of the ASK assessment.</p>
      </aside>
    </section>`;
}

function optionMarkup(question, option) {
  const hasAnswer = state.phase === "feedback";
  const isSelected = state.selectedAnswer === option.key;
  const isCorrect = hasAnswer && question.correctAnswer === option.key;
  const classes = ["choice"];
  if (isCorrect) classes.push("choice-correct");
  if (isSelected && !isCorrect) classes.push("choice-incorrect");

  let stateLabel = "";
  if (isSelected && isCorrect) stateLabel = '<span class="choice-state">Your choice · correct</span>';
  else if (isSelected) stateLabel = '<span class="choice-state">Your choice</span>';
  else if (isCorrect) stateLabel = '<span class="choice-state">Correct answer</span>';

  return `
    <label class="${classes.join(" ")}">
      <input
        class="choice-input"
        type="radio"
        name="answer"
        value="${option.key}"
        ${isSelected ? "checked" : ""}
        ${hasAnswer ? "disabled" : ""}
      />
      <span class="choice-letter" aria-hidden="true">${option.key}</span>
      <span class="choice-copy">${escapeHtml(option.text)}</span>
      ${stateLabel}
    </label>`;
}

function feedbackMarkup(question) {
  if (state.phase !== "feedback") return "";

  const selected = question.options.find((option) => option.key === state.selectedAnswer);
  const correct = question.options.find((option) => option.key === question.correctAnswer);
  const isCorrect = state.answerWasCorrect;
  const heading = isCorrect
    ? "That is the strongest answer."
    : "Not quite. This concept is in your review pile.";
  const nextLabel = state.mode === "main"
    ? state.queue.length === 0 ? "See first-pass summary" : "Continue"
    : state.missedIds.length === 0 ? "Finish review" : "Continue review";

  const explanation = isCorrect
    ? `
      <div class="feedback-answer feedback-answer-correct">
        <p class="feedback-label">Why ${correct.key} is correct</p>
        <p><strong>${correct.key} is correct.</strong> ${escapeHtml(correct.feedback)}</p>
      </div>`
    : `
      <div class="feedback-grid">
        <div class="feedback-answer feedback-answer-selected">
          <p class="feedback-label">Why ${selected.key} is not best</p>
          <p><strong>${selected.key} is not the best answer.</strong> ${escapeHtml(selected.feedback)}</p>
        </div>
        <div class="feedback-answer feedback-answer-correct">
          <p class="feedback-label">Why ${correct.key} is correct</p>
          <p><strong>${correct.key} is correct.</strong> ${escapeHtml(correct.feedback)}</p>
        </div>
      </div>`;

  return `
    <section
      class="feedback-panel ${isCorrect ? "is-correct" : "is-review"}"
      tabindex="-1"
      aria-live="polite"
      aria-labelledby="feedback-title"
      data-focus-target
    >
      <div class="feedback-heading">
        <span class="feedback-mark" aria-hidden="true">${isCorrect ? "✓" : "↗"}</span>
        <div>
          <p class="feedback-kicker">${isCorrect ? "Course-aligned response" : "Review pile updated"}</p>
          <h2 id="feedback-title">${heading}</h2>
        </div>
      </div>
      ${explanation}
      <div class="principle-note">
        <p class="feedback-label">The governing principle</p>
        <p>${escapeHtml(question.coreReason)}</p>
      </div>
      <button class="button button-light" type="button" data-action="continue">
        ${nextLabel} <span aria-hidden="true">→</span>
      </button>
    </section>`;
}

function questionMarkup() {
  const question = questionById.get(state.currentId);
  const isReview = state.mode === "review";

  return `
    <section class="screen question-screen" aria-labelledby="question-legend">
      <aside class="question-rail">
        ${progressMarkup()}
        <div class="topic-block">
          <span>Topic</span>
          <strong>${escapeHtml(question.topic)}</strong>
        </div>
        <div class="review-badge ${state.phase === "feedback" && !state.answerWasCorrect ? "is-updated" : ""}">
          <span>${state.missedIds.length}</span>
          <p>${plural(state.missedIds.length, "concept")} in review</p>
        </div>
        <p class="rail-help">${isReview ? "A correct retry removes this concept from your pile." : "Choose the one response that best connects evidence, action, and human ownership."}</p>
      </aside>

      <div class="question-workspace">
        <p class="question-id">${escapeHtml(question.id)} · ${isReview ? "Review" : "Practice"}</p>
        <form class="question-form">
          <fieldset>
            <legend id="question-legend" tabindex="-1">${escapeHtml(question.prompt)}</legend>
            <p class="choice-instruction" id="choice-instruction">Choose one answer. Your selection locks when chosen.</p>
            <div class="choices" aria-describedby="choice-instruction">
              ${question.options.map((option) => optionMarkup(question, option)).join("")}
            </div>
          </fieldset>
        </form>
        ${feedbackMarkup(question)}
      </div>
    </section>`;
}

function summaryMarkup() {
  const missed = state.missedIds.length;
  const correct = state.correctCount;
  const completeMessage = missed === 0
    ? "No concepts need another pass."
    : `${missed} ${plural(missed, "concept")} ready for focused review.`;

  return `
    <section class="screen completion-screen" aria-labelledby="summary-title">
      <div class="completion-index" aria-hidden="true">45</div>
      <div class="completion-copy">
        <p class="eyebrow"><span aria-hidden="true">02</span> First pass complete</p>
        <h1 id="summary-title" tabindex="-1">${completeMessage}</h1>
        <p class="completion-lede">
          You chose the strongest course-aligned response on ${correct} of ${questions.length} first attempts.
          This session snapshot is formative only; it is not an official score or readiness judgment.
        </p>

        <dl class="result-ledger">
          <div><dt>Answered</dt><dd>${state.answeredCount}</dd></div>
          <div><dt>Strongest response</dt><dd>${correct}</dd></div>
          <div><dt>In review</dt><dd>${missed}</dd></div>
        </dl>

        <div class="completion-actions">
          ${missed > 0 ? `
            <button class="button button-primary button-large" type="button" data-action="review">
              Review missed questions <span aria-hidden="true">→</span>
            </button>` : ""}
          <button class="button button-quiet button-large" type="button" data-action="restart">
            Start a fresh session
          </button>
        </div>
      </div>
      <aside class="completion-note">
        <span class="note-rule" aria-hidden="true"></span>
        <p><strong>What to look for in review</strong></p>
        <p>Return to the work problem, the evidence used, and the decision or control that must remain human-owned.</p>
      </aside>
    </section>`;
}

function reviewCompleteMarkup() {
  return `
    <section class="screen completion-screen review-complete" aria-labelledby="review-complete-title">
      <div class="completion-index completion-check" aria-hidden="true">✓</div>
      <div class="completion-copy">
        <p class="eyebrow"><span aria-hidden="true">03</span> Review complete</p>
        <h1 id="review-complete-title" tabindex="-1">Your review pile is clear.</h1>
        <p class="completion-lede">
          You returned to every missed concept and selected its strongest response in this browser session.
          Nothing has been saved.
        </p>
        <dl class="result-ledger">
          <div><dt>First-pass questions</dt><dd>${state.answeredCount}</dd></div>
          <div><dt>Review attempts</dt><dd>${state.reviewAttempts}</dd></div>
          <div><dt>Remaining</dt><dd>0</dd></div>
        </dl>
        <button class="button button-primary button-large" type="button" data-action="restart">
          Take the quiz again <span aria-hidden="true">→</span>
        </button>
      </div>
      <aside class="completion-note">
        <span class="note-rule" aria-hidden="true"></span>
        <p><strong>Keep the principle, not the letter.</strong></p>
        <p>Use the explanations to recognise the underlying work pattern in a new scenario.</p>
      </aside>
    </section>`;
}

function render() {
  reviewStatus.textContent = `Review pile: ${state.missedIds.length}`;
  resetButton.hidden = state.phase === "intro";

  if (state.phase === "intro") app.innerHTML = introMarkup();
  else if (state.phase === "question" || state.phase === "feedback") app.innerHTML = questionMarkup();
  else if (state.phase === "summary") app.innerHTML = summaryMarkup();
  else if (state.phase === "review-complete") app.innerHTML = reviewCompleteMarkup();

  document.querySelector("[data-action='start']")?.addEventListener("click", () => {
    state = beginQuiz(state);
    render();
    moveFocus("#question-legend");
  });

  document.querySelectorAll("input[name='answer']").forEach((input) => {
    input.addEventListener("change", (event) => {
      const question = questionById.get(state.currentId);
      state = recordAnswer(state, question, event.currentTarget.value);
      render();
      moveFocus("[data-focus-target]");
    });
  });

  document.querySelector("[data-action='continue']")?.addEventListener("click", () => {
    state = advanceQuiz(state);
    render();
    moveFocus(state.phase === "summary" ? "#summary-title" : state.phase === "review-complete" ? "#review-complete-title" : "#question-legend");
  });

  document.querySelector("[data-action='review']")?.addEventListener("click", () => {
      state = beginReview(state);
    render();
    moveFocus("#question-legend");
  });

  document.querySelectorAll("[data-action='restart']").forEach((button) => {
    button.addEventListener("click", () => {
      state = resetQuiz(state);
      render();
      moveFocus("#intro-title");
    });
  });
}

resetButton.addEventListener("click", () => {
  const confirmed = window.confirm("Start a new practice session? Your current progress will be cleared.");
  if (!confirmed) return;
  state = resetQuiz(state);
  render();
  moveFocus("#intro-title");
});

render();
