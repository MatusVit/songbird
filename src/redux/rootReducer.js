import { combineReducers } from "redux";
import { dataReducer } from './dataReducer';
import { gameReducer } from './gameReducer';

export const rootReducer = combineReducers({
  data: dataReducer,
  gameState: gameReducer,
}); 