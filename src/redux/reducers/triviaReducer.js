import { REQUEST_TRIVIA, RECEIVED_TRIVIA, FAILED_TRIVIA } from '../actions/requestAPI';

const INITIAL_STATE = [{
  isFetching: false,
  data: [],
  failed: '',
}];


function triviaReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_TRIVIA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVED_TRIVIA:
      return {
        ...state,
        isFetching: false,
        data: [action.data],
      };
    case FAILED_TRIVIA:
      return {
        ...state,
        failed: action.error
      };
    default:
      return state;
  };
}

export default triviaReducer;
