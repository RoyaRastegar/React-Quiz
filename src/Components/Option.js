import React from "react";

export default function Option({ question, dispatch, answer }) {
  const hasAnsered = answer !== null;
  return (
    <div className="options">
      <ul>
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnsered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            disabled={hasAnsered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            key={option}
          >
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
}
