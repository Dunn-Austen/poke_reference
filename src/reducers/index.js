import { combineReducers } from 'redux';
import { namesReducer } from './namesReducer';
import { typesReducer } from './typesReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { pokemonReducer } from './pokemonReducer';
import { opponentsReducer } from './pokemonReducer';

const rootReducer = combineReducers({
  pokeNames: namesReducer,
  pokeTypes: typesReducer,
  errorMessage: errorReducer,
  loadingStatus: loadingReducer,
  pokeData: pokemonReducer,
  opponentTypes: opponentsReducer
});

export default rootReducer;
