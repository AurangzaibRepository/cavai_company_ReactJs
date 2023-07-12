/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from '../../components/Image';
import Partner1 from '../../assets/home/partner1.webp';
import Partner2 from '../../assets/home/partner2.webp';
import Partner3 from '../../assets/home/partner3.webp';
import Partner4 from '../../assets/home/partner4.webp';
import Partner5 from '../../assets/home/partner5.webp';
import Partner6 from '../../assets/home/partner6.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Partners() {
  const imageList = [
    {
      id: 1,
      image: Partner1,
    },
    {
      id: 1,
      image: Partner2,
    },
    {
      id: 1,
      image: Partner3,
    },
    {
      id: 1,
      image: Partner4,
    },
    {
      id: 1,
      image: Partner5,
    },
    {
      id: 1,
      image: Partner6,
    },
  ];

  return (
    <div className="dv-section">
      <Carousel
        showStatus={false}
        autoPlay
        infiniteLoop
      >
        {imageList.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt="Partner"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Partners;
