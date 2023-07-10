/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({
  value,
  id,
  classIdentfier,
}) {
  return (
    <p id={id} className={classIdentfier}>
      {value}
    </p>
  );
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
