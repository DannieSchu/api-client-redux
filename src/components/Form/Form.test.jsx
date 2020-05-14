import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.jsx';
import { APIClientProvider } from '../../hooks/APIClientProvider.jsx';

describe('Form', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <APIClientProvider>
        <Form />
      </APIClientProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
