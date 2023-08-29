import React from "react";
import Score from './Score';

export default function Student(props) {
  const Student = ({ name, bio, scores }) => {};
  return (
    <div className="student">
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <h3>Scores:</h3>
      <ul>
        {props.scores.map((score, index) => (
          <li key={index}>
            {score.date}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
