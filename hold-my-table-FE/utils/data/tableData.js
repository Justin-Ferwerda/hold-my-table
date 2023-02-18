import { clientCredentials } from '../client';

const getSingleTable = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/tables/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch((error) => reject(error));
});

export default getSingleTable;