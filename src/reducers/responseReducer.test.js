import { MAKE_REQUEST } from '../actions/action';
import reducer from './responseReducer';

describe('response reducer', () => {
  it('handles a MAKE_REQUEST action', () => {
    const state = {
      loading: false,
      response: {
        quantity: 1,
        results: [{ name: 'Clarice' }]
      }
    };
    const action = {
      type: MAKE_REQUEST,
      payload: {
        url: 'some url',
        method: 'get',
        body: null,
        response: 'some response'
      }
    };
    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      response: 'some response'
    });
  });
});
