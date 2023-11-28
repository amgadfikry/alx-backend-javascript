export default function uploadPhoto(filename) {
  return (new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    reject(new Error(`${filename} cannot be processed`));
  }));
}
