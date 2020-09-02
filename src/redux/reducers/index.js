import { combineReducers } from 'redux';
import triviaReducer from '../reducers/triviaReducer';
import usuarioReducer from '../reducers/usuarioReducer';

const rootReducer = combineReducers({ triviaReducer, usuarioReducer });

export default rootReducer;
