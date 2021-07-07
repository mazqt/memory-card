function MenuText(props) {
  return (
    <div>
      <p>
        In this game, you'll be presented with a hand of 7 cards from the set
        and colour you've chosen. After you pick one, you'll be presented with a
        new hand of 7 cards. As long as you keep choosing cards that you haven't
        picked already, your score will increase. Once you pick a card that
        you've already chosen, the score and cards you've picked will both
        reset. Try to get as high of a score as you can!
      </p>
      <p>PS.</p>
      <p>
        While the game allows you to pick any set from magic's history, some of
        the cards from older sets lack image urls, and are thus removed from the
        pool. Hence, you may find that certain sets may give you a smaller
        number of cards than newer ones.
      </p>
    </div>
  );
}
export default MenuText;
