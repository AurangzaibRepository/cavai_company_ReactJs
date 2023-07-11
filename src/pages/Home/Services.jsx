/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../components/Label';
import Paragraph from '../../components/Paragraph';
import Image from '../../components/Image';
import Service1 from '../../assets/home/service1.png';
import Service2 from '../../assets/home/service2.png';
import Service3 from '../../assets/home/service3.png';

function Services({ items }) {
  const imageList = [
    Service1,
    Service2,
    Service3,
  ];

  return (
    <div className="dv-section" id="dv-services">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-4 text-center" key={item.id}>
            <Image
              src={imageList[index]}
              alt="Service"
            />
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
