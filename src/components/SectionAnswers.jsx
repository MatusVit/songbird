import React from "react";

export default ({ roundArray }) => {
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
