import { fetchToken } from './requestToken';

export const REQUEST_TRIVIA = 'REQUEST_TRIVIA';
export const RECEIVED_TRIVIA = 'RECEIVED_TRIVIA';
export const FAILED_TRIVIA = 'FAILED_TRIVIA';

const requestTrivia = () => ({
  type: REQUEST_TRIVIA,
});

const receivedTrivia = (data) => ({
  type: RECEIVED_TRIVIA,
  data,
});

const failedTrivia = (error) => ({
  type: FAILED_TRIVIA,
  error,
});

// export function fetchTrivia(parameter) {
//   return (dispatch) => {
//     dispatch(requestTrivia());
//     return fetch(`https://opentdb.com/api.php?amount=5&token=${parameter}`)
//       .then(
//         (data) => dispatch(receivedTrivia(data)),
//         (error) => dispatch(failedTrivia(error)),
//       );
//   };
// }

export function fetchTrivia() {
  return fetchToken().then(
    (data) => fetch(`https://opentdb.com/api.php?amount=5&token=${data.token}`)
      .then((data) => dispatch(receivedTrivia(data.results)))
      .then((error) => dispatch(failedTrivia(error)))
  )
};