import { getResponse, getLoading } from './responseSelectors';

describe('response selectors', () => {
  it('selects response state', () => {
    const state = {
      loading: false,
      response: {
        quantity: 1,
        results: [{ name: 'Jessica' }]
      }
    };

    const responseState = getResponse(state);

    expect(responseState).toEqual({
      quantity: 1,
      results: [{ name: 'Jessica' }]
    });
  });

  it('selects loading state', () => {
    const state = {
      loading: false,
      response: {
        quantity: 1,
        results: [{ name: 'Jessica' }]
      }
    };

    const loadingState = getLoading(state);

    expect(loadingState).toEqual(false);
  });
});
