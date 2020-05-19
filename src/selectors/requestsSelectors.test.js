import { getRequests } from './requestsSelectors';

describe('requests selectors', () => {
  it('selects requests state', () => {
    const state = [{
      url: 'some url',
      method: 'get',
      body: null,
      response: 'some json'
    }];
    const requestsState = getRequests(state);

    expect(requestsState).toEqual([{
      url: 'some url',
      method: 'get',
      body: null,
      response: 'some json'
    }]);
  });
});
