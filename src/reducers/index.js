import { combineReducers } from 'redux';
import { placeholderReducer } from './placeholderReducer';

const rootReducer = combineReducers({
  placeholder: placeholderReducer
});

export default rootReducer;
