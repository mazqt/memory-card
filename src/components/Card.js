import React, { useState, useEffect } from "react";

function Card(props) {
  console.log(props.card);
  return (
    <div>
      <h1>I'm the card</h1>
      <button onClick={props.chooseCard}>Score</button>
      <h1>{props.card.name}</h1>
    </div>
  );
}

export default Card;
