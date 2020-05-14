import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { apiData } from '../services/apiData.jsx';

const APIClientContext = createContext();

export const APIClientProvider = ({ children }) => {
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [results, setResults] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('requests'));
    if(storage) setRequests(storage);
  }, []);

  const stateFactory = {
    url: setUrl,
    method: setMethod,
    body: setBody
  };

  const handleChange = ({ target }) => stateFactory[target.name](target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    apiData(url, method, body)
      .then(res => {
        setResults(res),
        setLoading(false);
      });
    setRequests(prevRequests => {
      if(prevRequests.filter(request => request.url === url && request.method === method).length < 1) {
        return [{
          url,
          method,
          body: body || null
        }, ...prevRequests];
      } else {
        return prevRequests;
      }
    });
    localStorage.setItem('requests', JSON.stringify(requests));
  };

  const handleClick = ({ url, method, body }) => {
    setUrl(url);
    setMethod(method);
    setBody(body || null);
    setResults(null);
  };

  const handleDelete = () => {
    localStorage.clear();
    setRequests([]);
  };

  return (
    <APIClientContext.Provider value={{
      url,
      method,
      body,
      results,
      requests,
      loading,
      handleChange,
      handleSubmit,
      handleClick,
      handleDelete
    }}>
      {children}
    </APIClientContext.Provider>
  );
};

APIClientProvider.propTypes = {
  children: PropTypes.node
};

export const useRequestContext = () => {
  const context = useContext(APIClientContext);
  return context;
};

export const useUrl = () => {
  const { url } = useRequestContext();
  return url;
};

export const useMethod = () => {
  const { method } = useRequestContext();
  return method;
};

export const useBody = () => {
  const { body } = useRequestContext();
  return body;
};

export const useLoading = () => {
  const { loading } = useRequestContext();
  return loading;
};

export const useResults = () => {
  const { results } = useRequestContext();
  return results;
};

export const useRequests = () => {
  const { requests } = useRequestContext();
  return requests;
};

export const useHandleChange = () => {
  const { handleChange } = useRequestContext();
  return handleChange;
};

export const useHandleSubmit = () => {
  const { handleSubmit } = useRequestContext();
  return handleSubmit;
};

export const useHandleClick = () => {
  const { handleClick } = useRequestContext();
  return handleClick;
};

export const useHandleDelete = () => {
  const { handleDelete } = useRequestContext();
  return handleDelete;
};
