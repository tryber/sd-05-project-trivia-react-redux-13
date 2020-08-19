export const RECEIVED_TOKEN = 'RECEIVED_TOKEN';

export const receivedToken = (token) => ({
  type: RECEIVED_TOKEN,
  token,
});


export function fetchToken() {
  return (dispatch) => {
    return fetch('https://opentdb.com/api_token.php?command=request')
      .then(
        (data) => dispatch(receivedToken(data.token)),
      );
  };
}

