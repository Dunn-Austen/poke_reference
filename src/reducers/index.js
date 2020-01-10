import { combineReducers } from 'redux';
import { pokedataReducer } from './pokedataReducer';

const rootReducer = combineReducers({
  pokedata: pokedataReducer
});

export default rootReducer;
