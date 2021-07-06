import React, { useState, useEffect } from "react";

function Score(props) {
  return (
    <div>
      <h1>I'm the score</h1>
      <h1>{props.score}</h1>
    </div>
  );
}

export default Score;
