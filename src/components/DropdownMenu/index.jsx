/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductMenuItems from '../Navbar/ProductMenuItems';
import './style.css';

function DropdownMenu() {
  return (
    <div id="dv-submenu">
      <ul id="ul-submenu">
        {ProductMenuItems.map((item) => (
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
