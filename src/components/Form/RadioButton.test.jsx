import React from 'react';
import { shallow } from 'enzyme';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RadioButton
        value="get" name="method" onChange={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
