import { listQuestionArray } from '../data/birdsData';
import dataBirds from '../data/birds';

const initialState = {
  listQuestionArray,
  dataBirdsArray: dataBirds,
  questionImagePath: '/images/question-bird.jpg',
};

export const dataReducer = (state = initialState, action) => {
  return state;
} 