/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';

function Banner({ title, description }) {
  return (
    <div>
      <Header value={title} />
      <Paragraph value={description} />
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Banner;
