import React from "react";
import { useSelector } from "react-redux";

import './header.css';

const Header = () => {
  const { step, score, listQuestionArray } = useSelector((state) => state);

  const listQuestionElementsArray = listQuestionArray.map((question, index) => {
    let classAdd = false;
    if (step === index) classAdd = true;

    return (
      <li
        className={`list-group-item flex-fill text-center py-md-2 py-1 ${
          classAdd ? "current" : ""
          }`}
        key={question.toString()}
      >
        {question}
      </li>
    );
  });

  return (
    <header className="header">
      <div className="row">
        <div className="col d-flex justify-content-between">
          <div className="logo"></div>
          <h5 className="d-flex align-items-center">Score: {score}</h5>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <ul className="list-question list-group list-group-horizontal-md">
            {listQuestionElementsArray}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
