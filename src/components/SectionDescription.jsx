import React from "react";
import AudioPlayer from "./Player";
import { useSelector } from "react-redux";

export default () => {
  const { dataBirdsArray, step, lastSelectedBirdNumber } = useSelector(
    (state) => state
  );
  if (lastSelectedBirdNumber === null) {
    return (
      <section className="section-description jumbotron rounded p-3 m-0">
        <div className="row">
          <div className="col">
            <p className="description__text">
              Послушайте плеер. <br /> Выберите птицу из списка
            </p>
          </div>
        </div>
      </section>
    );
  }

  const cardBird = dataBirdsArray[step][lastSelectedBirdNumber - 1];
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
              <span>{cardBird.species}</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer url={cardBird.audio} isAuto={false} />
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
