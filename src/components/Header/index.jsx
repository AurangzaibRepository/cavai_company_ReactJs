/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Header({
  value,
  id,
  classIdentifier,
}) {
  return (
    <h1 id={id} className={classIdentifier}>
      {value}
    </h1>
  );
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
