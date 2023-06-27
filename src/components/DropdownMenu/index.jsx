/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

function DropdownMenu({ menuItems }) {
  return (
    <div id="dv-submenu">
      <ul id="ul-submenu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
