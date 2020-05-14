import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.css';
import { useHandleChange } from '../../hooks/APIClientProvider';

export const RadioButton = ({ value }) => {
  const handleChange = useHandleChange();

  return (
    <div className={styles.RadioButton}>
      <input
        id={value}
        type="radio"
        name="method"
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string.isRequired
};
