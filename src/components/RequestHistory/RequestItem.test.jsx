import React from 'react';
import { shallow } from 'enzyme';
import RequestItem from './RequestItem.jsx';
import { APIClientProvider } from '../../hooks/APIClientProvider.jsx';

describe('RequestItem', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <APIClientProvider>
        <RequestItem />
      </APIClientProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
