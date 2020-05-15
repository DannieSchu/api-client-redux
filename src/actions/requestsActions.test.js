import { addRequest, ADD_REQUEST } from './requestsActions';

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
});
