import React, { useState } from "react";
import questions from "../assets/harryPotterQuestions.json";

const QuestionComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [points, setPoints] = useState(0); //Track Points

  const currentQuestion = questions[currentQuestionIndex]; // Get the current question

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setPoints((prevPoints) => prevPoints + 1); // Increment points
    }

    setSubmitted(true);

  };

  const handleReset = () => {
    setAnswer("");
    setSubmitted(false);
    setCurrentQuestionIndex(0); // Reset to the first question
    setPoints(0); //Reset Points as the user likes
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setAnswer("");
      setSubmitted(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    } else {
      alert(`Trivia complete! Your total score is ${points}/${questions.length}`);
    }
  };

  const progressPercentage = (points/ questions.length) * 100;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quiz Game</h1>
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            background: "#e0e0e0",
            borderRadius: "10px",
            height: "20px",
            width: "300px",
            margin: "0 auto",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#4caf50",
              height: "100%",
              width: `${progressPercentage}%`,
              transition: "width 0.3s ease-in-out",
            }}
          ></div>
        </div>
        <p style={{ marginTop: "10px" }}>Points: {points} / {questions.length}</p>
      </div>

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