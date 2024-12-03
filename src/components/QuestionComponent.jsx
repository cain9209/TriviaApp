import React, { useState } from "react";
import questions from "../assets/questions.json";

const QuestionComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex]; // Get the current question

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswer("");
    setSubmitted(false);
    setCurrentQuestionIndex(0); // Reset to the first question
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setAnswer("");
      setSubmitted(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    } else {
      alert("You've completed all questions!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{currentQuestion.question}</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={answer}
            onChange={handleInputChange}
            placeholder="Enter your answer"
            style={{
              padding: "10px",
              width: "300px",
              marginRight: "10px",
              fontSize: "16px",
            }}
          />
          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>
            {answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase() ? (
              <span style={{ color: "green" }}>Correct! {currentQuestion.answer} is the right answer!</span>
            ) : (
              <span style={{ color: "red" }}>
                Incorrect! You answered: {answer}. The correct answer is: {currentQuestion.answer}.
              </span>
            )}
          </p>
          <button
            onClick={handleNextQuestion}
            style={{ padding: "10px 20px", fontSize: "16px", marginRight: "10px" }}
          >
            Next Question
          </button>
          <button onClick={handleReset} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
