import { combineReducers } from 'redux';
import { namesReducer } from './namesReducer';
import { typesReducer } from './typesReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  pokeNames: namesReducer,
  pokeTypes: typesReducer,
  errorMessage: errorReducer,
  loadingStatus: loadingReducer
});

export default rootReducer;
