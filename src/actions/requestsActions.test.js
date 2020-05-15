import { addRequest, ADD_REQUEST, setRequests, SET_REQUESTS } from './requestsActions';

describe('requests actions', () => {
  it('creates an ADD_REQUEST action', () => {
    const action = addRequest({
      url: 'domain/api/v1/something',
      method: 'get',
      body: 'Some body'
    });

    expect(action).toEqual({
      type: ADD_REQUEST,
      payload: {
        url: 'domain/api/v1/something',
        method: 'get',
        body: 'Some body'
      }
    });
  });

  it('creates a SET_REQUESTS action', () => {
    const action = setRequests([{
      url: 'domain/api/v1/something',
      method: 'get',
      body: 'Some body'
    }, {
      url: 'domain/api/v1/something',
      method: 'get',
      body: 'Some body'
    }
    ]);
    
    expect(action).toEqual({
      type: SET_REQUESTS,
      payload: [{
        url: 'domain/api/v1/something',
        method: 'get',
        body: 'Some body'
      }, {
        url: 'domain/api/v1/something',
        method: 'get',
        body: 'Some body'
      }
      ]
    });
  });
});
