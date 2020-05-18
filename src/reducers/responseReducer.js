import { MAKE_REQUEST, LOADING } from '../actions/action';

const initialState = {
  loading: false,
  response: {},
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOADING: 
      return { ...state, loading: true };
    case MAKE_REQUEST:
      return { ...state, response: action.payload.response, loading: false };
    default: return state;
  }
}
