import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing",
  "🤫": "Shushing Face",
  "😵": "Dizzy Face",
  "💁‍♂️": "Man Tipping Hand",
  "🙋‍♂️": "Man Raising Hand",
  "🤷‍♂️": "Man Shrugging",
  "👳": "Person Wearing Turban",
  "❤️": "Red Heart",
  "🤥": "Lying Face"
};

var emojiData = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Oops! we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        placeholder="Search for the emoji 🔍"
        onChange={onChangeHandler}
      ></input>

      <div id="div-meaning">
        <strong>{meaning}</strong>
      </div>

      <h3>Emojis we have in our data</h3>
      {emojiData.map((emoji) => (
        <span onClick={() => onClickHandler(emoji)} id="span" key={emoji}>
          {emoji}
        </span>
      ))}
    </div>
  );
}
