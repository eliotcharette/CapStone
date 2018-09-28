import { combineReducers } from 'redux';
import MasterListReducer from './reducer_experiences.js';
import ActiveTrip from './reducer_selected_trip';

const rootReducer = combineReducers({
  experiences: MasterListReducer,
  activeTrip: ActiveTrip
});

export default rootReducer;
