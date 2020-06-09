import axios from 'axios';

export const getAllHotels = async () => {
  const response = await axios.get('http://localhost:8000/hotels');
  if (response.statusText === 'OK') {
    return response.data;
  }
  return false;
};
