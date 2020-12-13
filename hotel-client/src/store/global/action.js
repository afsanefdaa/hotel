import axios from 'axios';
import {
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from './constants';

export const getUserAction = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });

  const response = await axios.get('http://localhost:8000/users/1');

  if (response.statusText === 'OK') {
    dispatch({ type: GET_USER_SUCCESS, payload: response.data[0] });
    return response.data;
  }

  dispatch({ type: GET_USER_ERROR });
  return false;
};
