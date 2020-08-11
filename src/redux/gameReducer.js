import { NEXT_STEP } from "./types";

const initialState = {
  step: 0,
  currentBirdNumber: 0,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      const newStep = state.step + 1
      return { ...state, step: newStep }

    default: return state;
  }
} 