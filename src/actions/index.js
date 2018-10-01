import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const trips = firebase.database().ref('trips');

export function addTrip(values) {
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
