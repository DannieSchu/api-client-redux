import { combineReducers } from 'redux';
import requests from './requestsReducer';
import response from './responseReducer';

export default combineReducers({
  requests,
  response
});
