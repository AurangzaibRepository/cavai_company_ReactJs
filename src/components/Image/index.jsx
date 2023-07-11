/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Image({
  src,
  alt,
  id,
  classIdentifier,
}) {
  return (
    <img
      src={src}
      alt={alt}
      id={id}
      className={classIdentifier}
    />
  );
}

Image.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

Image.defaultProps = {
  id: '',
  classIdentifier: '',
};

export default Image;
