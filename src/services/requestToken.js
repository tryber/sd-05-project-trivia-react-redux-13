const fetchToken = fetch('https://opentdb.com/api_token.php?command=request')
  .then((data) => data.json())
  .then((response) => console.log(response.token));

export default fetchToken;
