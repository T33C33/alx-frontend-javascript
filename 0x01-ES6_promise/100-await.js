import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    const [photoResponse, userResponse] = await Promise.all([photo, user]);

    return { photo: photoResponse, user: userResponse };
  } catch (error) {
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
