function Card(props) {
  return (
    <div className="Card">
      <img
        src={props.card.imageUrl}
        onClick={props.chooseCard.bind(null, props.card.name)}
        alt={props.card.name}
      ></img>
    </div>
  );
}

export default Card;
