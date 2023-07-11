/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../components/Label';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Image1 from '../../assets/home/casestudies1.webp';
import Image2 from '../../assets/home/casestudies2.webp';
import Image3 from '../../assets/home/casestudies3.webp';
import Image4 from '../../assets/home/casestudies4.webp';

function CaseStudies({ items }) {
  const imageList = [
    Image1,
    Image2,
    Image3,
    Image4,
  ];

  return (
    <div className="dv-section" id="dv-case-studies">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-3 text-center" key={item.id}>
            <Image
              src={imageList[index]}
              alt="Case Study"
            />
            <Button value={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

CaseStudies.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default CaseStudies;
