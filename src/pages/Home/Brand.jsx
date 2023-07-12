/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
          <Link to={brandInformation.link}>{brandInformation.link_text}</Link>
        </div>
      </div>
    </div>
  );
}

Brand.propTypes = {
  brandInformation: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link_text: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Brand;
