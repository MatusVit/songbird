import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseAnswer } from "../redux/actions";

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
  const { step, dataBirdsArray } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (currentStep !== step) {
    roundArray = shuffle([...dataBirdsArray[step]]);
    currentStep = step;
  }

  const listAnswersElementsArray = roundArray.map((element) => (
    <li className="list-group-item" key={element.id}>
      <span className="list-point"></span>
      {element.name}
    </li>
  ));

  return (
    <section className="section-answers">
      <ul
        className="list-answers list-group"
        onClick={(event) => {
          const element = event.target.closest(".list-group-item");
          if (element) dispatch(chooseAnswer(element.textContent));
        }}
      >
        {listAnswersElementsArray}
      </ul>
    </section>
  );
};
