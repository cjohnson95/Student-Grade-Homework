import React from "react";

const Score = ({ date, score }) => {
  return (
    <li>
      {date}: {score}
    </li>
  );
};

export default Score;
