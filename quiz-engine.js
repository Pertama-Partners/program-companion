function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function baseState(questionIds) {
  assert(Array.isArray(questionIds) && questionIds.length > 0, "Question IDs are required.");
  assert(new Set(questionIds).size === questionIds.length, "Question IDs must be unique.");

  return {
    phase: "intro",
    mode: "main",
    questionIds: [...questionIds],
    currentId: null,
    queue: [],
    selectedAnswer: null,
    answerWasCorrect: null,
    answeredCount: 0,
    correctCount: 0,
    reviewAttempts: 0,
    reviewStartCount: 0,
    missedIds: [],
  };
}

function questionState(state, currentId, queue, mode = state.mode) {
  return {
    ...state,
    phase: "question",
    mode,
    currentId,
    queue,
    selectedAnswer: null,
    answerWasCorrect: null,
  };
}

function createQuizState(questionIds) {
  return baseState(questionIds);
}

function startQuiz(state) {
  assert(state.phase === "intro", "The quiz can only start from the introduction.");
  const [currentId, ...queue] = state.questionIds;
  return questionState(state, currentId, queue, "main");
}

function submitAnswer(state, question, answerKey) {
  assert(state.phase === "question", "An answer can only be submitted once per question.");
  assert(question?.id === state.currentId, "The submitted question does not match the active item.");
  assert(question.options.some((option) => option.key === answerKey), "The selected answer is invalid.");

  const answerWasCorrect = answerKey === question.correctAnswer;
  const missedIds = answerWasCorrect
    ? state.mode === "review"
      ? state.missedIds.filter((id) => id !== state.currentId)
      : state.missedIds
    : state.missedIds.includes(state.currentId)
      ? state.missedIds
      : [...state.missedIds, state.currentId];
  const queue = state.mode === "review" && !answerWasCorrect
    ? [...state.queue, state.currentId]
    : state.queue;

  return {
    ...state,
    phase: "feedback",
    queue,
    selectedAnswer: answerKey,
    answerWasCorrect,
    missedIds,
    answeredCount: state.answeredCount + (state.mode === "main" ? 1 : 0),
    correctCount: state.correctCount + (state.mode === "main" && answerWasCorrect ? 1 : 0),
    reviewAttempts: state.reviewAttempts + (state.mode === "review" ? 1 : 0),
  };
}

function continueQuiz(state) {
  assert(state.phase === "feedback", "Continue is only available after feedback.");

  if (state.mode === "main" && state.queue.length === 0) {
    return {
      ...state,
      phase: "summary",
      currentId: null,
      selectedAnswer: null,
      answerWasCorrect: null,
    };
  }

  if (state.mode === "review" && state.missedIds.length === 0) {
    return {
      ...state,
      phase: "review-complete",
      currentId: null,
      queue: [],
      selectedAnswer: null,
      answerWasCorrect: null,
    };
  }

  const [currentId, ...queue] = state.queue;
  assert(Boolean(currentId), "The active queue ended unexpectedly.");
  return questionState(state, currentId, queue);
}

function startReview(state) {
  assert(state.phase === "summary", "Review can only start after the first pass.");
  assert(state.missedIds.length > 0, "There are no missed questions to review.");
  const [currentId, ...queue] = state.missedIds;
  return questionState(
    { ...state, reviewStartCount: state.missedIds.length },
    currentId,
    queue,
    "review",
  );
}

function restartQuiz(state) {
  return baseState(state.questionIds);
}

globalThis.PertamaQuizEngine = Object.freeze({
  continueQuiz,
  createQuizState,
  restartQuiz,
  startQuiz,
  startReview,
  submitAnswer,
});
