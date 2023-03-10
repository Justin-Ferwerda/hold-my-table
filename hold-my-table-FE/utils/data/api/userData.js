import { clientCredentials } from '../../client';

const updateUserProfile = (userData) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${userData.id}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch((error) => reject(error));
});

export default updateUserProfile;
