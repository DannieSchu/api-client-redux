import { MAKE_REQUEST } from '../actions/action';

export default function reducer(state = [], action) {
  switch(action.type) {
    case MAKE_REQUEST:
      return [action.payload, ...state];
    default:
      return state;
  }
}
