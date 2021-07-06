function Score(props) {
  return (
    <div>
      <h1>I'm the score</h1>
      <h1>{props.score}</h1>
      <h1>I'm the highscore</h1>
      <h1>{props.highscore}</h1>
    </div>
  );
}

export default Score;
