export const ADD_REQUEST = 'ADD_REQUEST';
export const addRequest = request => ({
  type: ADD_REQUEST,
  payload: request
});

export const SET_REQUESTS = 'SET_REQUESTS';
export const setRequests = requests => ({
  type: SET_REQUESTS,
  payload: requests
});
