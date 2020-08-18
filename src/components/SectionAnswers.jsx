import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseAnswer } from "../redux/actions";
import {
  AUDIO_ERROR_URL,
  AUDIO_WIN_URL,
  AUDIO_OBJECT,
} from "../data/constants";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let roundArray = null;
let currentStep = null;

export default () => {
  const {
    step,
    dataBirdsArray,
    currentBirdNumber,
    answersArray,
    isCorrectAnswer,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (currentStep !== step) {
    roundArray = shuffle([...dataBirdsArray[step]]);
    currentStep = step;
  }

  const listAnswersElementsArray = roundArray.map((element) => {
    let pointerStyle = "";
    if (answersArray.includes(element.id)) pointerStyle = "error";
    if (isCorrectAnswer && element.id === currentBirdNumber + 1)
      pointerStyle = "right";

    return (
      <li className="list-group-item" key={element.id} data-id={element.id}>
        <span className={`list-point ${pointerStyle}`}></span>
        {element.name}
      </li>
    );
  });

  const handleClick = (element) => {
    if (!isCorrectAnswer) {
      if (+element.dataset.id === currentBirdNumber + 1)
        AUDIO_OBJECT.src = AUDIO_WIN_URL;
      else AUDIO_OBJECT.src = AUDIO_ERROR_URL;
      AUDIO_OBJECT.play();
    }
    dispatch(chooseAnswer(+element.dataset.id));
  };

  return (
    <section className="section-answers">
      <ul
        className="list-answers list-group"
        onClick={(event) => {
          const element = event.target.closest(".list-group-item");
          if (element) handleClick(element);
        }}
      >
        {listAnswersElementsArray}
      </ul>
    </section>
  );
};
