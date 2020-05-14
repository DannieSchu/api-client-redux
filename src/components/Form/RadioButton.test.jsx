import React from 'react';
import { shallow } from 'enzyme';
import { RadioButton } from './RadioButton.jsx';
import { APIClientProvider } from '../../hooks/APIClientProvider.jsx';

describe('RadioButton', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <APIClientProvider>
        <RadioButton
          value="get" />
      </APIClientProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
