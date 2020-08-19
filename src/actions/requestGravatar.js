import { cryptoEmail } from '../cryptoJS/index'

export const REQUEST_GRAVATAR = 'REQUEST_GRAVATAR';
export const RECEIVED_GRAVATAR = 'RECEIVED_GRAVATAR';
export const FAILED_GRAVATAR = 'FAILED_GRAVATAR';

const requestGravatar = () => ({
  type: REQUEST_GRAVATAR,
});

const receivedGravatar = (data) => ({
  type: RECEIVED_GRAVATAR,
  data,
});

const failedGravatar = (error) => ({
  type: FAILED_GRAVATAR,
  error,
});

export function fetchGravatar() {
  return (dispatch) => {
    dispatch(requestGravatar());
    return fetch(`https://www.gravatar.com/avatar/${cryptoEmail}`)
      .then(
        (results) => dispatch(receivedGravatar(results)),
        (error) => dispatch(failedGravatar(error)),
      );
  };
}



