/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Brand({ brandInformation }) {
  return (
    <div id="dv-brand" className="dv-section">
    </div>
  );
}

Brand.propTypes = {
  brandInformation: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default Brand;
