import {
  REQUEST_TOKEN,
  RECEIVED_TOKEN,
  REQUEST_TRIVIA,
  RECEIVED_TRIVIA,
  FAILED_TRIVIA,
} from '../actions/requestAPI';

const INITIAL_STATE = [{
  isFetching: false,
  token: '',
  data: [],
}];

function triviaReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_TOKEN:
      return { ...state, isFetching: true, };
    case RECEIVED_TOKEN:
      return { ...state, isFetching: false, token: action.token };
    case REQUEST_TRIVIA:
      return { ...state, isFetching: true };
    case RECEIVED_TRIVIA:
      return { ...state, isFetching: false, data: [action.data] };
    default:
      return state;
  };
}

export default triviaReducer;
