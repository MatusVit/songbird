import { NEXT_STEP, CHOOSE_ANSWER, NEW_GAME } from "./types";

export function nextStep() {
  return {
    type: NEXT_STEP,
  }
}

export function chooseAnswer(choiceId) {
  return {
    type: CHOOSE_ANSWER,
    payload: choiceId,
  }
}

export function newGame() {
  return {
    type: NEW_GAME,
  }
}
