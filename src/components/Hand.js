import Card from "./Card";

function Hand(props) {
  return (
    <div className="Hand">
      <Card chooseCard={props.chooseCard} card={props.hand[0]} />
      <Card chooseCard={props.chooseCard} card={props.hand[1]} />
      <Card chooseCard={props.chooseCard} card={props.hand[2]} />
      <Card chooseCard={props.chooseCard} card={props.hand[3]} />
      <Card chooseCard={props.chooseCard} card={props.hand[4]} />
      <Card chooseCard={props.chooseCard} card={props.hand[5]} />
      <Card chooseCard={props.chooseCard} card={props.hand[6]} />
    </div>
  );
}

export default Hand;
