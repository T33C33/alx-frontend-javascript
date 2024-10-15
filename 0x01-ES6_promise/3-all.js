import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((funcObjects) => {
      const [uploadPhotoResponse, createUserResponse] = funcObjects;
      console.log(
        `${uploadPhotoResponse.body} ${createUserResponse.firstName} ${createUserResponse.lastName}`,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
