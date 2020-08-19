export async function fetchToken() {
  const data = await fetch('https://opentdb.com/api_token.php?command=request');
  return console.log(data.json());
};

 
