import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

export const RECEIVE_TRIP = 'receive_trip';

firebase.initializeApp(firebaseConfig);
const trips = firebase.database().ref('trips');

export function createTrip(values) {
  return () => trips.push({
    values
  });
}

export function firebaseNewTripListener() {
  return function(dispatch) {
    values.on('child_added', data => {
      const newTrip = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveTrip(newTrip));
    });
  };
}

export function receiveTrip(tripFromFirebase) {
  return {
    type: RECEIVE_TRIP,
    trip: tripFromFirebase
  };
}

export function selectTrip(experience) {
  return {
    type: 'TRIP_SELECTED',
    payload: experience
  };
}
