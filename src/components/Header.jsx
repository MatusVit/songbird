import React from "react";

export default () => {
  return (
    <header className="header">
      <div className="row">
        <div className="col d-flex justify-content-between">
          <div className="logo"></div>
          <h5 className="d-flex align-items-center">Score: 0</h5>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ul className="listQuestion">
            <li>Разминка</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
