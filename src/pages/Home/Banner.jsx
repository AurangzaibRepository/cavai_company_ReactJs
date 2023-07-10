/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

function Banner({ title, description }) {
  return (
    <Header value={title} />
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Banner;
