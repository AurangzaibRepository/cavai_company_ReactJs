/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../components/Label';
import Paragraph from '../../components/Paragraph';

function Services({ items }) {
  return (
    <div className="dv-section" id="dv-services">
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 text-center" key={item.id}>
            <Label
              value={item.title}
              classIdentifier="mb-3"
            />
            <Paragraph value={item.caption} />
          </div>
        ))}
      </div>
    </div>
  );
}

Services.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default Services;
