import React from 'react';
import { shallow } from 'enzyme';
import RequestHistory from './RequestHistory.jsx';
import { APIClientProvider } from '../../hooks/APIClientProvider.jsx';

describe('RequestHistory', () => {
  it('matches a snapshot', () => {

    const wrapper = shallow(
      <APIClientProvider>
        <RequestHistory />
      </APIClientProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
