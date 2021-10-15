import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sequenceReducer from './sequenceReducer';

export default combineReducers({
    user: userReducer,
    sequence: sequenceReducer
});