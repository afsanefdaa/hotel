import axios from 'axios';
import {
  GET_HOTELS_ERROR,
  GET_HOTELS_REQUEST,
  GET_HOTELS_SUCCESS,
  GET_ADD_SUCCESS,
  GET_REMOVE_SUCCESS,
} from './constants';

export const getAllHotels = () => async (dispatch) => {
  dispatch({ type: GET_HOTELS_REQUEST });

  const response = await axios.get('http://localhost:8000/hotels');

  if (response.statusText === 'OK') {
    dispatch({ type: GET_HOTELS_SUCCESS, payload: response.data });
    return response.data;
  }

  dispatch({ type: GET_HOTELS_ERROR });
  return false;
};

export const addHotel = (data) => async (dispatch) => {
  dispatch({ type: GET_ADD_SUCCESS, payload: { data } });

  return false;
};

export const removeHotel = (id) => async (dispatch) => {
  dispatch({ type: GET_REMOVE_SUCCESS, payload: { id } });

  return false;
};
