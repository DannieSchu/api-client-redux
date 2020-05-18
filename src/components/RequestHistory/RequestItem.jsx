import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFormRequest } from '../../hooks/formRequest';
import { getURL, getMethod, getBody } from '../../selectors/requestsSelectors';
import styles from './RequestItem.css';

const RequestItem = () => {
  const url = useSelector(getURL);
  const method = useSelector(getMethod);
  const body = useSelector(getBody);
  const { handleClick } = useFormRequest();

  return (
    <section className={styles.RequestItem} onClick={() => handleClick({ url, method, body })}>
      <h3>{method}</h3>
      <p>{url}</p>
    </section>
  );
};

RequestItem.propTypes = {
  method: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func
};

export default RequestItem;
