import React from "react";
import { useSelector } from "react-redux";

const Header = ({ array }) => {
  //  const dispatch = useDispatch();
  const { step, score } = useSelector((state) => state.gameState);
  console.log("step=", step, " score=", score);

  const listQuestionElementsArray = array.map((question) => (
    <li
      // todo: add class 'current'
      className="list-group-item flex-fill text-center py-md-2 py-1 "
      key={question.toString()}
    >
      {question}
    </li>
  ));

  return (
    <header className="header">
      <div className="row">
        <div className="col d-flex justify-content-between">
          <div className="logo"></div>
          <h5 className="d-flex align-items-center">Score: {score}}</h5>
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
