import getToken from '../../services/requests';

export const REQUEST_TRIVIA = 'REQUEST_TRIVIA';
export const RECEIVED_TRIVIA = 'RECEIVED_TRIVIA';
export const FAILED_TRIVIA = 'FAILED_TRIVIA';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVED_TOKEN = 'RECEIVED_TOKEN';

const requestToken = () => ({ type: REQUEST_TOKEN });
const receivedToken = (token) => ({ type: RECEIVED_TOKEN, token });

const requestTrivia = () => ({ type: REQUEST_TRIVIA });
const receivedTrivia = (data) => ({ type: RECEIVED_TRIVIA, data });

export function fetchToken() {
  return async (dispatch) => {
    dispatch(requestToken());
    const data = await getToken();
    return dispatch(receivedToken(data));
  };
}

export function fetchTrivia(token) {
  return async (dispatch) => {
    dispatch(requestTrivia());
    const data = await fetch(`https://opentdb.com/api.php?amount=5&tokn=${token}`);
    const response = data.json();
    const results = Promise.resolve(response);
    return results.then((event) => dispatch(receivedTrivia(event.results)));
  };
}
