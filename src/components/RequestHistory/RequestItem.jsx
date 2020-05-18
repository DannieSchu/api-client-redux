import React from 'react';
import PropTypes from 'prop-types';
import { useFormRequest } from '../../hooks/formRequest';
import styles from './RequestItem.css';

const RequestItem = ({ url, method, body }) => {
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
  body: PropTypes.string
};

export default RequestItem;
