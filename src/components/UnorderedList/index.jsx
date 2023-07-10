/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function UnorderedList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

UnorderedList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default UnorderedList;
