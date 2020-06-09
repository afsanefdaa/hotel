import axios from 'axios';

export const getSingleHotel = async (id) => {
  const response = await axios.get(`http://localhost:8000/hotels/${id}`);

  if (response.statusText === 'OK') {
    return response.data;
  }
  return false;
};
