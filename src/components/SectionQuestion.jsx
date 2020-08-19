import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Player from "./Player";
import { HIDDEN_BIRD_NAME } from "../data/constants";

export default () => {
  const {
    step,
    currentBirdNumber,
    dataBirdsArray,
    isCorrectAnswer,
    questionImagePath,
  } = useSelector((state) => state);
  const cardBird = dataBirdsArray[step][currentBirdNumber];

  useEffect(() => {
    if (!isCorrectAnswer) console.log(`ответ - ${cardBird.name}`);
  });

  return (
    <section className="section-question jumbotron rounded my-3 p-3 d-flex flex-wrap justify-content-center">
      <img
        className="question__image"
        src={isCorrectAnswer ? cardBird.image : questionImagePath}
        alt="bird"
      />

      <ul className="question__list list-group list-group-flush ml-2 ml-sm-3 flex-grow-1">
        <li className="list-group-item px-1">
          <h3 className="text-center text-md-left">
            {isCorrectAnswer ? cardBird.name : HIDDEN_BIRD_NAME}
          </h3>
        </li>
        <li className="list-group-item px-1">
          <Player url={cardBird.audio} isAuto={true} isStop={isCorrectAnswer} />
        </li>
      </ul>
    </section>
  );
};
