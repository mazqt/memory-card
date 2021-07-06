function Card(props) {
  console.log(props.card);
  return (
    <div>
      <h1>I'm the card</h1>
      <img
        src={props.card.imageUrl}
        onClick={props.chooseCard.bind(null, props.card.name)}
        alt={props.card.name}
      ></img>
    </div>
  );
}

export default Card;
