import React from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonNext from "./components/ButtonNext";
import SectionQuestion from "./components/SectionQuestion";
import SectionAnswers from "./components/SectionAnswers";
import SectionDescription from "./components/SectionDescription";
import { listQuestionArray } from "./data/birdsData";
import birdsData from "./data/birds";

function App() {
  const roundArray = birdsData[0];
  const currentBirdCard = roundArray[0];

  return (
    <div className="container pt-3 text-white">
      <Header array={listQuestionArray} />
      <SectionQuestion cardBird={currentBirdCard} />

      <div className="row">
        <div className="col-12 col-md-6 pr-2">
          <SectionAnswers roundArray={roundArray} />
        </div>
        <div className="col-12 col-md-6 pl-2">
          <SectionDescription cardBird={currentBirdCard} />
        </div>
      </div>

      <ButtonNext />
    </div>
  );
}

export default App;
