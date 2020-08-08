import React from "react";
import Player from "./Player";

export default ({ cardBird }) => {
  return (
    <section className="section-question jumbotron rounded my-3 p-3 d-flex">
      <img className="question__image" src={cardBird.image} alt="bird" />

      <ul className="question__list list-group list-group-flush ml-3">
        <li className="list-group-item">
          <h3>{cardBird.name}</h3>
        </li>
        <li className="list-group-item">
          <Player url={cardBird.audio} />
        </li>
      </ul>
    </section>
  );
};
