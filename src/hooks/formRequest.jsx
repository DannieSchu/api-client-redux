import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RadioButton } from '../components/Form/RadioButton';
import { makeRequest } from '../actions/action';

export const useFormRequest = () => {
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  
  // TO DO: dispatch action to get requests from storage
  // IS THIS NECESSARY???
  // useEffect(() => {
  //   const storage = JSON.parse(localStorage.getItem('requests'));
  //   if(storage) setRequests(storage);
  // }, []);

  const stateFactory = {
    url: setUrl,
    method: setMethod,
    body: setBody
  };

  const handleChange = ({ target }) => stateFactory[target.name](target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(makeRequest(url, method, body));
      // .then(requests => dispatch(setRequests(requests)));

    // setRequests(prevRequests => {
    //   if(prevRequests.filter(request => request.url === url && request.method === method).length < 1) {
    //     return [{
    //       url,
    //       method,
    //       body: body || null
    //     }, ...prevRequests,
    //     ];
    //   } else {
    //     return prevRequests;
    //   }
    // });
    // localStorage.setItem('requests', JSON.stringify(requests));
  };

  const methods = ['get', 'post', 'put', 'patch', 'delete'];

  const radioButtons = methods.map((method, i) => (
    <RadioButton value={method} key={i} />
  ));

  return { url, body, handleSubmit, handleChange, radioButtons };
};
