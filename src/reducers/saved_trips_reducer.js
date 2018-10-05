import _ from 'lodash';
import { RECEIVE_TRIP, FETCH_TRIPS } from '../actions';

export default function(state = {}, action) {
//  let newState;
  // const { values } = action;

  switch (action.type) {

  case FETCH_TRIPS:
    return _.mapKeys(action.payload.data, 'id');

  case RECEIVE_TRIP:

    return _.mapKeys(action.trip.data, 'id');

  default:
    return state;
  }
}
