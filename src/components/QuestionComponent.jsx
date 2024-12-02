import React, { useState } from "react";

const QuestionComponent = () => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>What is your favorite programming language?</h2>
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
            {answer.trim().toLowerCase() === "javascript" ? (
              <span style={{ color: "green" }}>Correct! JavaScript is a great choice!</span>
            ) : (
              <span style={{ color: "red" }}>Incorrect! You answered: {answer}</span>
            )}
          </p>
          <button onClick={handleReset} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
