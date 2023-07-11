/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../components/Label';
import Paragraph from '../../components/Paragraph';

function Services({ items }) {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-md-4">
          <Label value={item.title} />
        </div>
      ))}
    </div>
  );
}

Services.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default Services;
