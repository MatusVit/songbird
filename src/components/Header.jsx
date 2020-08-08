import React from "react";

export default ({ array }) => {
  const listQuestionElementsArray = array.map((question) => (
    <li
      className="list-group-item flex-fill text-center py-md-2 py-1"
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
          <h5 className="d-flex align-items-center">Score: 0</h5>
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
