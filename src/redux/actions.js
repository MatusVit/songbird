import { NEXT_STEP } from "./types";



export function nextStep() {
  return {
    type: NEXT_STEP,
  }
}

// export function getRandomBird() {
//   const randomNumber = Math.floor((Math.random() * 6));
//   return {
//     type: GET_RANDOM_BIRD,
//     payload: { randomNumber },
//   }
// }