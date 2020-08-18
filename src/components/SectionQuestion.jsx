import React from "react";
import { connect } from "react-redux";
import Player from "./Player";
import { HIDDEN_BIRD_NAME } from "../data/constants";

const SectionQuestion = ({ cardBird, questionImagePath, isCorrectAnswer }) => {
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
          <Player url={cardBird.audio} isAuto={true} />
        </li>
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { step, currentBirdNumber } = state;
  const cardBird = state.dataBirdsArray[step][currentBirdNumber];
  const questionImagePath = state.questionImagePath;
  const isCorrectAnswer = state.isCorrectAnswer;

  return {
    cardBird,
    questionImagePath,
    isCorrectAnswer,
  };
};

export default connect(mapStateToProps, null)(SectionQuestion);
