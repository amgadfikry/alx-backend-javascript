export default function signUpUser(firstName, lastName) {
  return (new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    resolve({
      firstName,
      lastName,
    });
  }));
}
