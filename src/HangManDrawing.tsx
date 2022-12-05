import React from "react";
import styled, { keyframes } from "styled-components";
import {
  fadeInDown,
  flipInX,
  flipInY,
  slideInDown,
  swing,
  rollIn,
  fadeInDownBig,
} from "react-animations";

import "./App.css";

const bounceAnimation = keyframes`${fadeInDown}`;
const LeftArmAnimationKey = keyframes`${flipInY}`;
const BodyAnimationKey = keyframes`${fadeInDownBig}`;
const HatAnimationKey = keyframes`${rollIn}`;

const HatDiv = styled.div`
  animation: 1s ${HatAnimationKey};
`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const LeftArmAnimation = styled.div`
  animation: 1s ${LeftArmAnimationKey};
`;

const BodyAnimation = styled.div`
  animation: 1s ${BodyAnimationKey};
`;

const HEAD = <BouncyDiv className="head" />;

const HAT = <HatDiv className="triangle" />;

const BODY = <BouncyDiv className="body" />;

const RIGHT_ARM = <LeftArmAnimation className="armRight" />;

const LEFT_ARM = <LeftArmAnimation className="armLeft" />;

const RIGHT_LEG = <LeftArmAnimation className="legRight" />;

const LEFT_LEG = <LeftArmAnimation className="legLeft" />;

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
