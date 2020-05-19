import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.css';

export const RadioButton = ({ value, name, onChange }) => {

  return (
    <div className={styles.RadioButton}>
      <input
        id={value}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func
};
