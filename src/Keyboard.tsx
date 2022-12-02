import React from "react";
import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const FirstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const SecondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const ThirdRow = ["z", "x", "c", "v", "b", "n", "m"];

type KeyboardProps = {
  disabled?: boolean;
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  activeLetter,
  inactiveLetter,
  disabled = false,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        // display: "grid",
        gap: ".9rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="keyboard"
    >
      {/* {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetter.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}
            
            `}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })} */}

      <div
        className={styles.divForLetters}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   flexDirection: "row",
        //   gap: "0.7rem",
        // }}
      >
        {FirstRow.map((key) => {
          const isActive = activeLetter.includes(key);
          const isInactive = inactiveLetter.includes(key);

          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ""}
                 ${isInactive ? styles.inactive : ""}
                 
                 `}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "0.7rem",
        }}
      >
        {SecondRow.map((key) => {
          const isActive = activeLetter.includes(key);
          const isInactive = inactiveLetter.includes(key);

          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ""}
                 ${isInactive ? styles.inactive : ""}
                 
                 `}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "0.7rem",
        }}
      >
        {ThirdRow.map((key) => {
          const isActive = activeLetter.includes(key);
          const isInactive = inactiveLetter.includes(key);

          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ""}
                 ${isInactive ? styles.inactive : ""}
                 
                 `}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
