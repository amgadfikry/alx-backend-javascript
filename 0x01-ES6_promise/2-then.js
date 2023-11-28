export default function handleResponseFromAPI(promise) {
  promise.then((res) => {
    console.log('Got a response from the API');
    return res;
  })
    .catch((error) => { // eslint-disable-line no-unused-vars
      console.log('Got a response from the API');
      return (new Error({}));
    });
}
