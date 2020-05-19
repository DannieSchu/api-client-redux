import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RadioButton } from '../components/Form/RadioButton';
import { makeRequest } from '../actions/action';

export const useFormRequest = () => {
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  const stateFactory = {
    url: setUrl,
    method: setMethod,
    body: setBody
  };

  const handleChange = ({ target }) => stateFactory[target.name](target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(makeRequest(url, method, body));
  };

  const methods = ['get', 'post', 'put', 'patch', 'delete'];

  const radioButtons = methods.map((method, i) => (
    <RadioButton value={method} key={i} />
  ));

  const handleClick = ({ url, method, body }) => {
    setUrl(url);
    setMethod(method);
    setBody(body || null);
  };

  return { url, body, handleSubmit, handleChange, radioButtons, handleClick };
};
