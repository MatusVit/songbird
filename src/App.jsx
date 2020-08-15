import React from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonNext from "./components/ButtonNext";
import SectionQuestion from "./components/SectionQuestion";
import SectionAnswers from "./components/SectionAnswers";
import SectionDescription from "./components/SectionDescription";

function App() {
  return (
    <div className="container pt-3 text-white">
      <Header />
      <SectionQuestion />

      <div className="row">
        <div className="col-12 col-md-6 pr-2">
          <SectionAnswers />
        </div>
        <div className="col-12 col-md-6 pl-2">
          <SectionDescription />
        </div>
      </div>

      <ButtonNext />
    </div>
  );
}

export default App;
