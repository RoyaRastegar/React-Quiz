import React from "react";

export default function FinishedScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "😊";
  if (percentage >= 50 && percentage < 80) emoji = "🤔";
  if (percentage >= 0 && percentage < 50) emoji = "🙃";
  if (percentage === 50) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        <strong>{maxPoints}</strong> ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset Quiz
      </button>
    </>
  );
}
