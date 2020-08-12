import { NEXT_STEP, GET_RANDOM_BIRD } from "./types";

const getRandomNumber = () => Math.floor((Math.random() * 6));

const initialState = {
  score: 0,
  step: 0,
  currentBirdNumber: getRandomNumber(),
  answersArray: [],
  isCorrectAnswer: true, // ! current state = false
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      const newStep = state.step + 1
      return { ...state, step: newStep, currentBirdNumber: getRandomNumber() }
    // case GET_RANDOM_BIRD:
    //   return { ...state, currentBirdNumber: action.payload.randomNumber }
    default: return state;
  }
} 