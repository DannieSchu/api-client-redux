import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestItem.css';
import { useUrl, useMethod, useBody, useHandleClick } from '../../hooks/APIClientProvider';

const RequestItem = () => {
  const url = useUrl();
  const method = useMethod();
  const body = useBody();
  const handleClick = useHandleClick();

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
