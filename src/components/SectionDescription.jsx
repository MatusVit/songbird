import React from "react";
import AudioPlayer from "./Player";

export default ({ cardBird }) => {
  return (
    <section className="section-description jumbotron rounded p-3 m-0">
      <div className="row">
        <div className="col">
          <img className="description__image" src={cardBird.image} alt="bird" />
        </div>
        <div className="col">
          <ul className="description__list list-group list-group-flush">
            <li className="list-group-item">
              <h4>{cardBird.name}</h4>
            </li>
            <li className="list-group-item">
              <span>Parus major</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer />
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <span className="description__text small-text">
            {cardBird.description}
          </span>
        </div>
      </div>
    </section>
  );
};
