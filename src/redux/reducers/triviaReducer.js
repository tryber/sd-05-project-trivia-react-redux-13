import {
  REQUEST_TOKEN,
  RECEIVED_TOKEN,
  REQUEST_TRIVIA,
  RECEIVED_TRIVIA,
  NEXT_QUESTION,
  STATUS,
} from '../actions/requestAPI';

const INITIAL_STATE = 
  {
    isFetching: false,
    token: '',
    data: [],
    index: 0,
    status: false,
  };

function triviaReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_TOKEN:
      return { ...state, isFetching: true };
    case RECEIVED_TOKEN:
      return { ...state, isFetching: false, token: action.token };
    case REQUEST_TRIVIA:
      return { ...state, isFetching: true };
    case RECEIVED_TRIVIA:
      return { ...state, isFetching: false, data: [action.data] };
    case NEXT_QUESTION:
      return { ...state, index: state.index + 1, status: false };
    case STATUS:
      return { ...state, status: true };
    default:
      return state;
  }
}

export default triviaReducer;
