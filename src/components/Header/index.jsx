import React from 'react';
import PropTypes from 'prop-types';

function Header({
    value,
    id,
    classIdentifier,
}) {
  return ();
}

Header.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

Header.defaultProps = {
  id: '',
  classIdentifier: '',
};

export default Header;
