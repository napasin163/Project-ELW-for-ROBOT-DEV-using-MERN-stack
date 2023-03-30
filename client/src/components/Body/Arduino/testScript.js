import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest country in the world?",
    choices: ["China", "USA", "Russia"],
    answer: "Russia",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
    answer: "Mount Everest",
  },
];

function Quiz2() {
  const [score, setScore] = useState(0);

  function calculateScore() {
    let newScore = 0;
    questions.forEach((question, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      if (selected && selected.value === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  }

  return (
    <div id="quiz-container2">
      <h1>My Multiple Choice Quiz</h1>
      <div id="question-container2">
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <h3>{question.question}</h3>
            <div className="choices">
              {question.choices.map((choice, i) => (
                <label key={i}>
                  <input type="radio" name={`question${index}`} value={choice} />
                  {choice}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button id="submit-button" onClick={calculateScore}>
        Submit
      </button>
      <div id="score-container">
        Your score is {score} out of {questions.length}.
      </div>
    </div>
  );
}

export default Quiz2;