import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  Promise.all([photo, user])
    .then(([photoRes, userRes]) => {
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
    })
    .catch((error) => console.log('Signup system offline')); // eslint-disable-line no-unused-vars
}
