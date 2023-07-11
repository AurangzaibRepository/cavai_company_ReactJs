import React from 'react';
import PropTypes from 'prop-types';

function Image({
  src,
  id,
  classIdentifier,
}) {
  return ();
}

Image.propTypes = {
  src: PropTypes.node.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

Image.defaultProps = {
  id: '',
  classIdentifier: '',
};

export default Image;
