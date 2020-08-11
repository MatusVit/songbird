import { NEXT_STEP, GET_RANDOM_BIRD } from "./types";

export function nextStep() {
  return {
    type: NEXT_STEP,
  }
}

export function getRandomBird() {
  return {
    type: GET_RANDOM_BIRD,
  }
}