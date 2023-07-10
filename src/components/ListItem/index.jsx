/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ children }) {
  return (
    <li>
      {children}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
