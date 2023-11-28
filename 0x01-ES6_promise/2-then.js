export default function handleResponseFromAPI(promise) {
  return promise.then((res) => { // eslint-disable-line no-unused-vars
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  })
    .catch((error) => { // eslint-disable-line no-unused-vars
      console.log('Got a response from the API');
      return Error();
    });
}
