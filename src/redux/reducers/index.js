import { combineReducers } from 'redux';
import triviaReducer from '../reducers/triviaReducer';

const rootReducer = combineReducers({ triviaReducer });

export default rootReducer;
