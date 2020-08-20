import { REQUEST_GRAVATAR, RECEIVED_GRAVATAR, FAILED_GRAVATAR } from '../actions/requestGravatar';

const INITIAL_STATE = [
  {
    isFetching: false,
    profilePicture: [],
    error: '',
  },
];

export default function gravatarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_GRAVATAR:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVED_GRAVATAR:
      return {
        ...state,
        profilePicture: [...state, action.data],
        isFetching: false,
      };
    case FAILED_GRAVATAR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
