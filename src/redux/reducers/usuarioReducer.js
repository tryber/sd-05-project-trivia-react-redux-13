import { ADD_PLAYER, COUNT_SCORE } from '../actions/usuarioActions';

const INITIAL_STATE = {
  name: '',
  email: '',
  score: 0,
  assertions: 0,
};

const usuarioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        name: action.name,
        email: action.email,
        assertions: 0,
        score: 0,
      };
    case COUNT_SCORE:
      return {
        ...state,
        score: action.score + state.score,
        assertions: state.assertions + 1,
      };
    default:
      return state;
  }
};

export default usuarioReducer;
