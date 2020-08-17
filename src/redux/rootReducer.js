import { listQuestionArray } from '../data/birdsData';
import dataBirds from '../data/birds';
import { NEXT_STEP, CHOOSE_ANSWER, } from "./types";
import { CORRECT_ANSWER_COST, WRONG_ANSWER_COST, IMAGE_QUESTION_URL } from '../data/constants';

const getRandomNumber = () => Math.floor((Math.random() * 6));

const initialState = {
  listQuestionArray,
  dataBirdsArray: dataBirds,
  questionImagePath: IMAGE_QUESTION_URL,
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
      const newStep = state.step + 1;
      const newScore = state.score + (CORRECT_ANSWER_COST - ((state.answersArray.length - 1) * WRONG_ANSWER_COST));
      return {
        ...state,
        step: newStep,
        score: newScore,
        currentBirdNumber: getRandomNumber(),
        lastSelectedBirdNumber: null,
        answersArray: [],
        isCorrectAnswer: false,
      }

    case CHOOSE_ANSWER:
      const selectedBirdObjectId = action.payload;
      if (state.isCorrectAnswer || state.answersArray.includes(selectedBirdObjectId))
        return {
          ...state,
          lastSelectedBirdNumber: selectedBirdObjectId
        };
      return {
        ...state,
        lastSelectedBirdNumber: selectedBirdObjectId,
        answersArray: state.answersArray.concat([selectedBirdObjectId],),
        isCorrectAnswer: selectedBirdObjectId === state.currentBirdNumber + 1,
      }

    default: return state;
  }
} 