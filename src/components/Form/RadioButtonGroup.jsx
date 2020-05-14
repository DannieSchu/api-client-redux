import React from 'react';
import PropTypes from 'prop-types';

export const RadioButtonGroup = ({ children }) => {
  const radioButtonsWithNameAndOnChange = React.Children.map(children, child => {
    return React.cloneElement(child);
  });
  
  return (
    <>
      {radioButtonsWithNameAndOnChange}
    </>
  );
};

RadioButtonGroup.propTypes = {
  children: PropTypes.array.isRequired
};

