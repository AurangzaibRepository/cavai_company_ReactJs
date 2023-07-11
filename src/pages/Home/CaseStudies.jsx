/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from 'prop-types';

function CaseStudies({ items }) {
  return (
    <div className="dv-section" id="dv-case-studies">
    </div>
  );
}

CaseStudies.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default CaseStudies;
