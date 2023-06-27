/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import ProductMenuItems from '../Navbar/ProductMenuItems';
import './style.css';

function Dropdown() {
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

export default Dropdown;
