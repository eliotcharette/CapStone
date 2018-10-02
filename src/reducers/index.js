import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MasterListReducer from './reducer_experiences.js';
import ActiveTrip from './reducer_selected_trip';
import SavedReducer from './saved_trips_reducer';

const rootReducer = combineReducers({
  experiences: MasterListReducer,
  activeTrip: ActiveTrip,
  form: formReducer,
  savedTrips: SavedReducer
});

export default rootReducer;
