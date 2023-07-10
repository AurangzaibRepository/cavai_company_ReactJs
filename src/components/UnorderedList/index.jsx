/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem';

function UnorderedList({
  items,
  id,
  classIdentifier,
}) {
  return (
    <ul id={id} className={classIdentifier}>
      {items.map((item) => (
        
      ))}
    </ul>
  );
}

UnorderedList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

UnorderedList.defaultProps = {
  id: '',
  classIdentifier: '',
};

export default UnorderedList;
