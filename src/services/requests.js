export const getToken = () =>
  fetch('https://opentdb.com/api_token.php?command=request').then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
