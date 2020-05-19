import { MAKE_REQUEST } from '../actions/action';
import { SET_REQUESTS } from '../actions/requestsActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case MAKE_REQUEST:
      return [action.payload, ...state];
    case SET_REQUESTS:
      return action.payload;
    default:
      return state;
  }
}
