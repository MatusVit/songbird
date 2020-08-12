import React from "react";
import { useSelector } from "react-redux";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default () => {
  const { step } = useSelector((state) => state.gameState);
  const { dataBirdsArray } = useSelector((state) => state.data);
  const roundArray = shuffle([...dataBirdsArray[step]]);

  const listAnswersElementsArray = roundArray.map((element) => (
    <li className="list-group-item" key={element.id}>
      <span className="list-point"></span>
      {element.name}
    </li>
  ));

  return (
    <section className="section-answers">
      <ul className="list-answers list-group">{listAnswersElementsArray}</ul>
    </section>
  );
};
