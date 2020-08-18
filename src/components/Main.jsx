import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CORRECT_ANSWER_COST } from "../data/constants";
import SectionQuestion from "./SectionQuestion";
import SectionAnswers from "./SectionAnswers";
import SectionDescription from "./SectionDescription";
import ButtonNext from "./ButtonNext";

export default () => {
  const { step, listQuestionArray, score } = useSelector((state) => state);
  const dispatch = useDispatch();

  const maxScore = listQuestionArray.length * CORRECT_ANSWER_COST;

  const mainFinal = (
    <main className="main jumbotron d-flex flex-column align-items-center rounded my-3 p-5">
      <h2 className="display-3">Поздравляем!</h2>
      <p className="lead">
        Вы прошли викторину и набрали {score} из {maxScore} возможных баллов
      </p>

      <button
        type="button"
        className="btn btn-outline-secondary active my-4"

        // disabled={!isCorrectAnswer}
        // onClick={() => dispatch(nextStep())}
      >
        Попробовать еще раз
      </button>
      {/* image */}
    </main>
  );

  const mainBase = (
    <main className="main">
      <SectionQuestion />
      <div className="row">
        <div className="col-12 col-md-6 pr-2">
          <SectionAnswers />
        </div>
        <div className="col-12 col-md-6 pl-2">
          <SectionDescription />
        </div>
      </div>
      <ButtonNext />
    </main>
  );

  if (step === listQuestionArray.length - 1) return mainFinal;
  return mainBase;
};
