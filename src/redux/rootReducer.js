import { listQuestionArray } from '../data/birdsData';
import dataBirds from '../data/birds';
import { NEXT_STEP, CHOOSE_ANSWER, } from "./types";

const getRandomNumber = () => Math.floor((Math.random() * 6));

const initialState = {
  listQuestionArray,
  dataBirdsArray: dataBirds,
  questionImagePath: '/images/question-bird.jpg',
  score: 0,
  step: 0,
  currentBirdNumber: getRandomNumber(),
  lastSelectedBirdNumber: null,
  answersArray: [],
  isCorrectAnswer: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      const newStep = state.step + 1
      return { ...state, step: newStep, currentBirdNumber: getRandomNumber() }
    case CHOOSE_ANSWER:
      const selectedBirdObject = state.dataBirdsArray[state.step].find((object) => object.name === action.payload);
      if (state.answersArray.includes(selectedBirdObject.id)) return { ...state, lastSelectedBirdNumber: selectedBirdObject.id };
      return {
        ...state,
        lastSelectedBirdNumber: selectedBirdObject.id,
        answersArray: state.answersArray.concat([selectedBirdObject.id],),
        isCorrectAnswer: selectedBirdObject.id === state.currentBirdNumber + 1,
      }
    default: return state;
  }
} 