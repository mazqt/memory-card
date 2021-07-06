import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import Hand from "./components/Hand";
import SetPicker from "./components/SetPicker";
import ColourPicker from "./components/ColourPicker";

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
    console.log(sets);
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
      console.log(cards);
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
      <div>
        <Score score={score} highscore={highscore} />
        <Hand chooseCard={chooseCard} hand={hand} />
        <button onClick={setPlaying.bind(null, false)}>Toggle Playing</button>
      </div>
    );
  } else {
    if (loading || loadingSets) {
      return <h1>Still loading!</h1>;
    } else {
      return (
        <div className="App">
          <SetPicker
            onChangeSet={magicSetHandler}
            selectedSet={magicSet}
            magicSets={magicSets}
          />
          <ColourPicker
            onChangeColour={magicColourHandler}
            selectedColour={colour}
          />
          <button onClick={setPlaying.bind(null, true)}>Toggle Playing</button>
        </div>
      );
    }
  }
}

export default App;
