import React from "react";
import AudioPlayer from "../player";
import { useSelector } from "react-redux";

import './section-description.css'

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
        <div className="col col-xl-5 d-flex justify-content-center mb-2">
          <img className="description__image" src={cardBird.image} alt="bird" />
        </div>
        <div className="col col-xl-7">
          <ul className="description__list list-group list-group-flush text-center text-lg-left">
            <li className="list-group-item">
              <h4>{cardBird.name}</h4>
            </li>
            <li className="list-group-item">
              <span>{cardBird.species}</span>
            </li>
            <li className="list-group-item my-2">
              <AudioPlayer url={cardBird.audio} isAuto={false} isStop={false} />
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <span className="description__text small-text">
            {cardBird.description}
          </span>
        </div>
      </div>
    </section>
  );
};
