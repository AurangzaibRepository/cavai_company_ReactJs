import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({
  value,
  id,
  classIdentfier,
}) {
  return ();
}

Paragraph.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentfier: PropTypes.string,
};

Paragraph.defaultProps = {
  id: '',
  classIdentfier: '',
};

export default Paragraph;
