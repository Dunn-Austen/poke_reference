import { combineReducers } from 'redux';
import { placeholderReducer } from './placeholderReducer';


export const rootReducer = combineReducers({
  placeholder: placeholderReducer
});

export default rootReducer;
