import React from "react";
import { connect } from "react-redux";
import Player from "./Player";

const SectionQuestion = ({ cardBird, questionImagePath, isCorrectAnswer }) => {
  return (
    <section className="section-question jumbotron rounded my-3 p-3 d-flex">
      <img
        className="question__image"
        src={isCorrectAnswer ? cardBird.image : questionImagePath}
        alt="bird"
      />

      <ul className="question__list list-group list-group-flush ml-3">
        <li className="list-group-item">
          <h3>{isCorrectAnswer ? cardBird.name : "******"}</h3>
        </li>
        <li className="list-group-item">
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
