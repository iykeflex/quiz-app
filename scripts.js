import quizData from "./quizData.js";
import { loadQuestions } from "./loadQuestions.js";

let currentQuestion = 0;
let score = 0;

// Shuffle questions before starting
const shuffledQuizData = quizData.sort(() => Math.random() - 0.5);

function updateState(newQuestion, newScore) {
    currentQuestion = newQuestion;
    score = newScore;
    loadQuestions(currentQuestion, score, updateState, shuffledQuizData);
}

// Start quiz when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    loadQuestions(currentQuestion, score, updateState, shuffledQuizData);
});

~
~
~
~
~
~

~
~
~
~
~
~

