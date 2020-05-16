import { fetchResponse } from '../services/apiData';

export const LOADING = 'LOADING';
export const MAKE_REQUEST = 'MAKE_REQUEST';
export const makeRequest = (url, method, body) => dispatch => {
  dispatch({ type: LOADING });
  fetchResponse(url, method, body)
    .then(response => {
      dispatch({
        type: MAKE_REQUEST,
        payload: {
          url,
          method,
          body,
          response
        }
      });
    });
};
