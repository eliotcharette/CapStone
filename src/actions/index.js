import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

export const RECEIVE_TRIP = 'receive_trip';
export const FETCH_TRIPS = 'fetch_trips';

firebase.initializeApp(firebaseConfig);
const trips = firebase.database().ref('trips');

export function createTrip(values) {
  return () => trips.push({
    values
  });
}

export function selectTrip(experience) {
  return {
    type: 'TRIP_SELECTED',
    payload: experience
  };
}

export function firebaseNewTripListener() {
  return function(dispatch) {
    trips.on('child_added', data => {
      const newTrip = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveTrip(newTrip));
    });
  };
}


// export function firebaseNewTripListener() {
//   return function(dispatch) {
//     values.on('child_added', data => {
//       const newTrip = Object.assign({}, data.val(), {
//         id: data.getKey()
//       });
//       dispatch(receiveTrip(newTrip));
//     });
//   };
// }

export function fetchTrips() {
  return dispatch => {
    trips.on('value', snapshot => {
      dispatch({
        type: FETCH_TRIPS,
        payload: snapshot.val()
      });
    });
  };
}

export function receiveTrip(tripFromFirebase) {
  return {
    type: RECEIVE_TRIP,
    trip: tripFromFirebase
  };
}
