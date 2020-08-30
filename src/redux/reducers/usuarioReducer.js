import { ADD_PLAYER, ADD_PTS } from '../actions/usuarioActions';

const INITIAL_STATE = [];

const usuarioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        name: action.name,
        email: action.email,
      };
    case ADD_PTS:
      return {
        ...state,
        pontos: action.pontos,
      };
    default:
      return state;
  }
};

export default usuarioReducer;
