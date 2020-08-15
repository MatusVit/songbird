import { NEXT_STEP, CHOOSE_ANSWER } from "./types";

export function nextStep() {
  return {
    type: NEXT_STEP,
  }
}

export function chooseAnswer(choiceName) {
  return {
    type: CHOOSE_ANSWER,
    payload: choiceName,
  }
}
