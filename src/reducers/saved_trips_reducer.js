import { RECEIVE_TRIP } from '../actions';

export default (state = {}, action) => {
  let newState;
  const { values } = action;

  switch (action.type) {
  case RECEIVE_TRIP:
    newState = Object.assign({}, state);
    newState[action.trip.id] = action.trip;
    return newState;

  default:
    return state;
  }
};
