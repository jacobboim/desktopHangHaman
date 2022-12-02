import React from "react";

import "./App.css";

const HEAD = <div className="head" />;

const HAT = <div className="triangle" />;

const BODY = <div className="body" />;

const RIGHT_ARM = <div className="armRight" />;

const LEFT_ARM = <div className="armLeft" />;

const RIGHT_LEG = <div className="legRight" />;

const LEFT_LEG = <div className="legLeft" />;

const BODY_PARTS = [HAT, HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangManDrawingProps = {
  numberOfGuesses: number;
};

export default function HangManDrawing({
  numberOfGuesses,
}: HangManDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="downLine" />
      <div className="topLine" />
      <div className="middleLine" />
      <div className="bottomLine" />
    </div>
  );
}
