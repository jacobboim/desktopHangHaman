import React from "react";
import styles from "./HangManWord.module.css";

type HangManWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangManWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangManWordProps) {
  return (
    <div
      className={styles.hangmanWord}
      style={{
        display: "flex",
        gap: ".25em",
        // fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          className={styles.letterBounce}
          style={{ borderBottom: ".1em solid black" }}
          key={index}
        >
          <span
            className={styles.letterBounce}
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red " : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
