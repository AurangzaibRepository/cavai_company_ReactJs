/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Image from '../../components/Image';
import bannerImage from '../../assets/home/banner.webp';

function Banner({ title, description }) {
  return (
    <div id="dv-banner" className="text-center">
      <Header
        value={title}
        classIdentifier="mb-3"
      />
      <Paragraph value={description} />
      <Image
        src={bannerImage}
        alt="Banner"
      />
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Banner;
