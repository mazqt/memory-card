import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import Hand from "./components/Hand";
import SetPicker from "./components/SetPicker";
import ColourPicker from "./components/ColourPicker";
import { set } from "mtgsdk";

function App() {
  const mtg = require("mtgsdk");
  const [playing, setPlaying] = useState(false);
  const [magicSet, setMagicSet] = useState("DOM");
  const [colour, setColour] = useState("White");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [hand, setHand] = useState([]);

  async function fetchSet() {
    setLoading(true);
    let response = await mtg.card.where({ set: magicSet, colors: colour });
    setCards(response);
    setLoading(false);
  }

  function createHand() {
    let indexes = [3];
    do {
      let index = Math.floor(Math.random() * cards.length);
      console.log(index);
      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    } while (indexes.length < 7);
    let newHand = indexes.map((index) => cards[index]);
    setHand(newHand);
  }

  // useEffect(() => {
  //   createHand();
  // }, [cards]);

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

  const chooseCard = () => {
    setScore(score + 1);
  };

  if (playing) {
    return (
      <div>
        <Score score={score} />
        <Hand chooseCard={chooseCard} hand={hand} />
        <button onClick={setPlaying.bind(null, false)}>Toggle Playing</button>
      </div>
    );
  } else {
    if (loading) {
      return <h1>Still loading!</h1>;
    } else {
      return (
        <div className="App">
          <ol>
            {cards.map((card) => {
              return <img src={card.imageUrl}></img>;
            })}
          </ol>
          <SetPicker onChangeSet={magicSetHandler} selectedSet={magicSet} />
          <ColourPicker onChangeColour={magicColourHandler} />
          <button onClick={setPlaying.bind(null, true)}>Toggle Playing</button>
        </div>
      );
    }
  }
}

export default App;
