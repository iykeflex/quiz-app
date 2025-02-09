function loadQuestions(currentQuestion, score, updateState, quizData) {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const progressEl = document.getElementById("progress");
    const progressBarEl = document.getElementById("progress-bar");

    // Set question text
    questionEl.textContent = quizData[currentQuestion].question;
    progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;


    const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;
    progressBarEl.style.width = `${progressPercentage}%`;

    // Clear old options
    optionsEl.innerHTML = "";

    // Populate answer choices
    quizData[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", (event) => checkAnswer(event, currentQuestion, score, updateState, quizData));
        optionsEl.appendChild(button);
    });
}

function checkAnswer(event, currentQuestion, score, updateState, quizData) {
    if (event.target.textContent === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        updateState(currentQuestion, score);
    } else {
        document.getElementById("container").innerHTML = `<h2>You Scored: ${score}/${quizData.length}</h2>`;
    }
}

export { loadQuestions, checkAnswer };

