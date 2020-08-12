import { NEXT_STEP } from "./types";

const initialState = {
  score: 0,
  step: 0,
  currentBirdNumber: 0,
  answersArray: [],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      console.log(state);
      const newStep = state.step + 1
      return { ...state, step: newStep }

    default: return state;
  }


} 