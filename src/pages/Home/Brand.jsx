/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../components/Label';
import Paragraph from '../../components/Paragraph';

function Brand({ brandInformation }) {
  return (
    <div id="dv-brand" className="dv-section">
      <div className="row">
        <div className="col-md-6 text-center">
          <Label value={brandInformation.title} />
        </div>
        <div className="col-md-6">
          <Paragraph value={brandInformation.description} />
        </div>
      </div>
    </div>
  );
}

Brand.propTypes = {
  brandInformation: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Brand;
