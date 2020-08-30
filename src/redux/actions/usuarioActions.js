export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_PTS = 'ADD_PTS';

const addPlayer = () => ({
  type: ADD_PLAYER,
});

const addPts = (pontos) => ({
  type: ADD_PTS,
  pontos,
});
