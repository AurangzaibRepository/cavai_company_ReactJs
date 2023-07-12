/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../components/Label';
import Paragraph from '../../components/Paragraph';

function Brand({ brandInformation }) {
  return (
    <div id="dv-brand" className="dv-section">
      <div className="row">
        <div className="col-md-6">
          <Label value={brandInformation.title} />
        </div>
        <div className="col-md-6">
        </div>
      </div>
    </div>
  );
}

Brand.propTypes = {
  brandInformation: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default Brand;
