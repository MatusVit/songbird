import React from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonNext from "./components/ButtonNext";
import SectionQuestion from "./components/SectionQuestion";
import SectionAnswers from "./components/SectionAnswers";
import SectionDescription from "./components/SectionDescription";

function App() {
  return (
    <div className="container pt-3 bg-dark text-white">
      <Header />
      <SectionQuestion />
      <SectionAnswers />
      <SectionDescription />
      <ButtonNext />
    </div>
  );
}

export default App;
