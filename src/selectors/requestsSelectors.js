export const getRequests = state => state;

export const getURL = () => getRequests.url;
export const getMethod = () => getRequests.method;
export const getBody = () => getRequests.body;

export const getRequestsFromStorage = () => {
  JSON.parse(localStorage.getItem('requests'));
};
