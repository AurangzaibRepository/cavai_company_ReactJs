import React from 'react';
import PropTypes from 'prop-types';

function Button({
  value,
  id,
  classIdentifier,
}) {
  return ();
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

Button.defaultProps = {
  id: '',
  classIdentifier: '',
};

export default Button;
