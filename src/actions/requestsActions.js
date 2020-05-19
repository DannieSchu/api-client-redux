export const SET_REQUESTS = 'SET_REQUESTS';
export const setRequests = requests => dispatch => {
  localStorage.setItem('requests', JSON.stringify(requests))
    .then(requests => {
      dispatch({
        type: SET_REQUESTS,
        payload: requests
      });
    });
};
