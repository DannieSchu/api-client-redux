import React from 'react';
import PropTypes from 'prop-types';

export const RadioButtonGroup = ({ name, onChange, children }) => {
  const radioButtonsWithNameAndOnChange = React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange
    });
  });
  
  return (
    <>
      {radioButtonsWithNameAndOnChange}
    </>
  );
};

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired
};
