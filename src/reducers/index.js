import { combineReducers } from 'redux';
import { pokedataReducer } from './pokedataReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  pokedata: pokedataReducer,
  errorMessage: errorReducer
});

export default rootReducer;
