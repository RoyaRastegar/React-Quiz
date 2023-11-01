import React from "react";

export default function Progress({ index, numQuestion, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index} />
      <p>
        Question{" "}
        <strong>
          {index} / {numQuestion}
        </strong>
      </p>
      <p>
        <strong>
          {points} / {maxPoints}
        </strong>
        Points
      </p>
    </header>
  );
}
