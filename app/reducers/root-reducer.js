import { combineReducers } from 'redux';
import events from './event-reducer';
import places from './places-reducer';
import user from './user-reducer';
import drawer from './drawer-reducer';
import detail from './detail-reducer';
import photos from './photo-reducer';

const rootReducer = combineReducers({
  places: places,
  events: events,
  user: user,
  drawer: drawer,
  detail: detail,
  photos: photos,
});

export default rootReducer;