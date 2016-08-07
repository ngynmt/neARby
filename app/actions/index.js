import req from 'axios';
export const UPDATE_COORDINATES = 'UPDATE_COORDINATES';
export const PLACES_COLLECTION = 'PLACES_COLLECTION';
export const EVENTS_COLLECTION = 'EVENTS_COLLECTION';

export function updateCoordinates(latitude, longitude) {
  return { 
    type: UPDATE_COORDINATES,
    payload: {
      latitude: latitude,
      longitude: longitude
    }
  }
};

export function fetchPlaces() {
  console.log('GETTING PLACES');
  let collection = req.get('location');
  console.log(collection);
  return { 
    type: PLACES_COLLECTION,
    payload: {
      collection: [{name: 'TEST', threeJSLongitude: 0, threeJSLatitude: 0}]
    }
  }
};

export function fetchEvents() {

  let collection = req.get('location');
  console.log(collection);
  return { 
    type: EVENTS_COLLECTION,
    payload: {
      collection: collection
    }
  }
};