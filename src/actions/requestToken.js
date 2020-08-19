function fetchToken() {
  return fetch('https://opentdb.com/api_token.php?command=request')
    .then((data) => data.json())
    .then((response) => response.token)
}

export default fetchToken;
