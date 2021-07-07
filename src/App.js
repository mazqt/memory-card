import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import Hand from "./components/Hand";
import SetPicker from "./components/SetPicker";
import ColourPicker from "./components/ColourPicker";
import "./app.css";

function App() {
  const mtg = require("mtgsdk");
  const [playing, setPlaying] = useState(false);
  const [magicSet, setMagicSet] = useState("DOM");
  const [colour, setColour] = useState("White");
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [hand, setHand] = useState([]);
  const [highscore, setHighscore] = useState(0);
  const [usedCards, setUsedCards] = useState([]);
  const [magicSets, setMagicSets] = useState([]);
  const [loadingSets, setLoadingSets] = useState(true);

  async function fetchSet() {
    setLoading(true);
    let response = await mtg.card.where({
      set: magicSet,
      colors: colour,
      contains: "imageUrl",
    });
    setCards(response);
    setLoading(false);
  }

  async function fetchSets() {
    setLoadingSets(true);
    let response = await mtg.set.where({ type: "core" | "expansion" });
    let sets = [...response];
    response = await mtg.set.where({ type: "expansion" });
    sets = [...sets, ...response];
    setMagicSets(sets);
    setLoadingSets(false);
  }

  function createHand() {
    let indexes = [];
    do {
      let index = Math.floor(Math.random() * cards.length);
      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    } while (indexes.length < 7);
    let newHand = indexes.map((index) => cards[index]);
    setHand(newHand);
  }

  useEffect(() => {
    fetchSets();
  }, []);

  useEffect(() => {
    if (cards !== null) {
      createHand();
    }
  }, [cards, score]);

  useEffect(() => {
    fetchSet();
  }, [colour, magicSet]);

  const magicSetHandler = (event) => {
    const setCode = event.target.value;
    setMagicSet(setCode);
  };

  const magicColourHandler = (event) => {
    const colour = event.target.value;
    setColour(colour);
  };

  const chooseCard = (name) => {
    if (!usedCards.includes(name)) {
      setScore(score + 1);
      if (score >= highscore) {
        setHighscore(score + 1);
      }
      setUsedCards([...usedCards, name]);
    } else {
      setScore(0);
      setUsedCards([]);
    }
  };

  if (playing) {
    return (
      <div className="Game">
        <Score score={score} highscore={highscore} />
        <Hand chooseCard={chooseCard} hand={hand} />
        <button onClick={setPlaying.bind(null, false)}>Back to menu</button>
      </div>
    );
  } else {
    if (loading || loadingSets) {
      return (
        <div className="Menu">
          <div style={{ width: "30vw" }}>
            <p>
              In this game, you'll be presented with a hand of 7 cards from the
              set and colour you've chosen. After you pick one, you'll be
              presented with a new hand of 7 cards. As long as you keep choosing
              cards that you haven't picked already, your score will increase.
              Once you pick a card that you've already chosen, the score and
              cards you've picked will both reset. Try to get as high of a score
              as you can!
            </p>
            <p>PS.</p>
            <p>
              While the game allows you to pick any set from magic's history,
              some of the cards from older sets lack image urls, and are thus
              removed from the pool. Hence, you may find that certain sets may
              give you a smaller number of cards than newer ones.
            </p>
          </div>
          <div className="Picker">
            <p>Loading!</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Menu">
          <div style={{ width: "30vw" }}>
            <p>
              In this game, you'll be presented with a hand of 7 cards from the
              set and colour you've chosen. After you pick one, you'll be
              presented with a new hand of 7 cards. As long as you keep choosing
              cards that you haven't picked already, your score will increase.
              Once you pick a card that you've already chosen, the score and
              cards you've picked will both reset. Try to get as high of a score
              as you can!
            </p>
            <p>PS.</p>
            <p>
              While the game allows you to pick any set from magic's history,
              some of the cards from older sets lack image urls, and are thus
              removed from the pool. Hence, you may find that certain sets may
              give you a smaller number of cards than newer ones.
            </p>
          </div>
          <div className="Picker">
            <SetPicker
              onChangeSet={magicSetHandler}
              selectedSet={magicSet}
              magicSets={magicSets}
            />
            <ColourPicker
              onChangeColour={magicColourHandler}
              selectedColour={colour}
            />
            <button onClick={setPlaying.bind(null, true)}>Play!</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
