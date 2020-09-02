export const ADD_PLAYER = 'ADD_PLAYER';
export const COUNT_SCORE = 'COUNT_SCORE';
export const PLAY_AGAIN = 'PLAY_AGAIN';

export const addPlayer = (email, name) => ({
  type: ADD_PLAYER,
  email,
  name,
});

export const countScore = (score) => ({
  type: COUNT_SCORE,
  score,
});

export const playAgain = () => ({
  type: PLAY_AGAIN,
});
