import axios from 'axios';

export const getSingleRoom = async (id) => {
  const response = await axios.get(`http://localhost:8000/rooms/${id}`);

  if (response.statusText === 'OK') {
    return response.data;
  }
  return false;
};
