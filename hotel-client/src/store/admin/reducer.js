import {
  GET_ADD_SUCCESS,
  GET_REMOVE_SUCCESS,
  GET_HOTELS_ERROR,
  GET_HOTELS_REQUEST,
  GET_HOTELS_SUCCESS,
} from './constants';

const initialState = {
  loading: false,
  data: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // home requests
    case GET_HOTELS_REQUEST:
      return {
        ...state, loading: true, data: null, error: false,
      };
    case GET_HOTELS_SUCCESS:
      return {
        ...state, loading: false, data: action.payload, error: false,
      };
    case GET_HOTELS_ERROR:
      return {
        ...state, loading: false, data: null, error: true,
      };
    case GET_ADD_SUCCESS:
      return {
        ...state, loading: false, data: [...state.data, action.payload.data], error: true,
      };
    case GET_REMOVE_SUCCESS:
      return {
        // eslint-disable-next-line max-len
        ...state, loading: false, data: [...state.data.filter((el) => (el.id !== action.payload.id) && el)], error: true,
      };
    default:
      return state;
  }
};
