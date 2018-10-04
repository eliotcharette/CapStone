import _ from 'lodash';
import { RECEIVE_TRIP } from '../actions';

export default function(state = {}, action) {
//  let newState;
  // const { values } = action;

  switch (action.type) {
  case RECEIVE_TRIP:

    return _.mapKeys(action.trip.data, 'id');

  default:
    return state;
  }
}
