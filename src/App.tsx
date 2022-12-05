import React, { useState, useEffect, useCallback } from "react";

import words from "./wordList.json";
import HangManDrawing from "./HangManDrawing";
import HangManWord from "./HangManWord";
import Keyboard from "./Keyboard";
import Modal from "./Modal";

import "./Animations.css";
import "./App.css";

import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [showModal, setShowModal] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 7;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  function hasWon() {
    const isWinner = wordToGuess
      .split("")
      .every((letter) => guessedLetters.includes(letter));
    console.log(isWinner, "will show state of winner");
    return isWinner;
  }

  function hasLost() {
    const isLoser = incorrectLetters.length >= 7;

    console.log(isLoser, "will show state of loser");
    return isLoser;
  }

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner)
        return setGameOver(true);

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (hasWon() || hasLost()) {
        setShowModal(true);
        setGameOver(true);
      }
    }, 1500);
    // hasWon();
    // hasLost();
  }, [isWinner, isLoser]);
  console.log(wordToGuess);
  console.log(showModal, " this is show modal");

  const bounceAnimation = keyframes`${fadeInDown}`;

  const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
  `;

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
      className="mainStyle"
    >
      {/* <div style={{ fontSize: "2rem ", textAlign: "center" }}>
        {isWinner && " Winner!!!!"}
        {isLoser && " Try Again!!!!"}
      </div> */}

      <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      <HangManWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />

      <div className="slideHelp" style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetter={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>

      {/* {(hasWon() || hasLost()) && (
        <Modal isWinner={isWinner} wordToGuess={wordToGuess} />
      )} */}

      {showModal && <Modal isWinner={isWinner} wordToGuess={wordToGuess} />}
    </div>
  );
}

export default App;
