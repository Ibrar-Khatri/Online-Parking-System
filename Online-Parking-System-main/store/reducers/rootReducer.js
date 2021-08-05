import {combineReducers} from 'redux';
import userReducer from './users/userReducer';
import bookingReducer from './booking/bookingReducer';

const rootReducer = combineReducers({
  userReducer,
  bookingReducer,
});

export default rootReducer;
