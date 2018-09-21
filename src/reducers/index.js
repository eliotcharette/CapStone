import { combineReducers } from 'redux';
import MasterListReducer from './reducer_experiences.js';

const rootReducer = combineReducers({
  experiences: MasterListReducer
});

export default rootReducer;
