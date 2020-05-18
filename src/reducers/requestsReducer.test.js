import { MAKE_REQUEST } from '../actions/action';
import reducer from './requestsReducer';

describe('requests reducer', () => {
  it('handles a MAKE_REQUEST action', () => {
    const state = [{
      url: 'some url',
      method: 'get',
      body: null,
      response: 'some json'
    }];
    
    const action = {
      type: MAKE_REQUEST,
      payload: {
        url: 'another url',
        method: 'post',
        body: 'some json',
        response: 'json response'
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      url: 'another url',
      method: 'post',
      body: 'some json',
      response: 'json response'
    }, {
      url: 'some url',
      method: 'get',
      body: null,
      response: 'some json'
    }]);
  });
});
