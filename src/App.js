import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import Hand from "./components/Hand";
import SetPicker from "./components/SetPicker";
import ColourPicker from "./components/ColourPicker";
import MenuText from "./components/MenuText";
import Footer from "./components/Footer";
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
  const [hasWon, setHasWon] = useState(false);

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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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

    while (indexes.length < 1) {
      let index = Math.floor(Math.random() * cards.length);
      if (!usedCards.includes(cards[index].name)) {
        indexes.push(index);
      }
    }

    while (indexes.length < 7) {
      let index = Math.floor(Math.random() * cards.length);
      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }
    let newHand = indexes.map((index) => cards[index]);
    shuffleArray(newHand);
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
      if (usedCards.length + 1 === cards.length) {
        setHasWon(true);
      }
      setUsedCards([...usedCards, name]);
    } else {
      setScore(0);
      setUsedCards([]);
    }
  };

  if (playing) {
    if (!hasWon) {
      return (
        <div>
          <div className="Game">
            <Score score={score} highscore={highscore} />
            <Hand chooseCard={chooseCard} hand={hand} />
            <button onClick={setPlaying.bind(null, false)}>Back to menu</button>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="Menu">
          <p>
            Congratulations, you managed to win the game! Your memory must be
            quite outstanding to have done that.
          </p>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Play again
          </button>
        </div>
      );
    }
  } else {
    if (loading || loadingSets) {
      return (
        <div>
          <div className="Menu">
            <div style={{ width: "30vw" }}>
              <MenuText />
            </div>
            <div className="Picker">
              <p>Loading!</p>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <div className="Menu">
            <div style={{ width: "30vw" }}>
              <MenuText />
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
          <Footer />
        </div>
      );
    }
  }
}

export default App;
