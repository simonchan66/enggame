import React, { useState } from 'react';

function QuestionPanel({ question, onCorrectAnswer }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      onCorrectAnswer();
      setAnswer("");
    } else {
      alert("Try again!");
    }
  };

  return (
    <div className="question-panel">
      <h2>{question.text}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here"
        />
        <button type="submit">Answer</button>
      </form>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => setAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionPanel;