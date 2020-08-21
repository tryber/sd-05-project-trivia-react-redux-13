const fetchToken = fetch('https://opentdb.com/api_token.php?command=request')
  .then((data) => data.json())

export default fetchToken;
