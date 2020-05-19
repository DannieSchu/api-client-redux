import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.jsx';
import { Provider } from 'react-redux';
import store from '../../store.js';

describe('Form', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
