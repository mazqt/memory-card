function Score(props) {
  return (
    <div>
      <h1>Score: </h1>
      <h1>{props.score}</h1>
      <h1>Highscore: </h1>
      <h1>{props.highscore}</h1>
    </div>
  );
}

export default Score;
