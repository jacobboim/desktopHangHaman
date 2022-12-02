import React, { useState, useEffect } from "react";

import "./App.css";

type ModalProps = {
  isWinner: boolean;
  wordToGuess: string;
};

export default function Modal({ isWinner, wordToGuess }: ModalProps) {
  return (
    <div className="modal">
      {isWinner && (
        <div>
          <h2>You Win!!!</h2>

          <p className="solutionRight">Solution: {wordToGuess} </p>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      )}

      {!isWinner && (
        <div>
          <h2 className="YouLost">You Lost</h2>
          <p className="solutionWrong">Solution: {wordToGuess} </p>
          <p className="youWon">Try again with a new word!</p>
          <button className="playAgin" onClick={() => window.location.reload()}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
