import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CORRECT_ANSWER_COST, IMAGE_FINAL_URL } from "../data/constants";
import SectionQuestion from "./SectionQuestion";
import SectionAnswers from "./SectionAnswers";
import SectionDescription from "./SectionDescription";
import ButtonNext from "./ButtonNext";

export default () => {
  const { step, listQuestionArray, score } = useSelector((state) => state);
  const dispatch = useDispatch();

  const maxScore = listQuestionArray.length * CORRECT_ANSWER_COST;

  const finalButton = (
    <button
      type="button"
      className="btn btn-outline-secondary active my-4"
      // onClick={() => dispatch(nextStep())}
    >
      Попробовать еще раз
    </button>
  );

  const finalImage = (
    <img className="rounded my-4" src={IMAGE_FINAL_URL} alt="happy-bird" />
  );

  const mainFinal = (
    <main className="main jumbotron d-flex flex-column align-items-center rounded text-center my-3 p-5">
      <h2 className="display-5 display-md-3 mb-4">Поздравляем!</h2>
      <p className="lead">
        Вы прошли викторину и набрали {score} из {maxScore} возможных баллов
      </p>
      {score === maxScore ? finalImage : finalButton}
    </main>
  );

  const mainBase = (
    <main className="main">
      <SectionQuestion />
      <div className="row">
        <div className="col-12 col-md-6 pr-md-2 mb-3">
          <SectionAnswers />
        </div>
        <div className="col-12 col-md-6 pl-md-2 mb-3">
          <SectionDescription />
        </div>
      </div>
      <ButtonNext />
    </main>
  );

  if (step === listQuestionArray.length - 1) return mainFinal;
  return mainBase;
  // return mainFinal;
};
