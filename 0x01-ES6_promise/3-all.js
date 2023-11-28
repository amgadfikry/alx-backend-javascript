import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  Promise.all([photo, user])
    .then((res) => {
      console.log(res[0].body, res[1].firstName, res[1].lastName);
    })
    .catch((error) => console.log('Signup system offline')); // eslint-disable-line no-unused-vars
}
