/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Button({
  value,
  id,
  classIdentifier,
}) {
  return (
    <button type="button" id={id} className={classIdentifier}>
      {value}
    </button>
  );
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
