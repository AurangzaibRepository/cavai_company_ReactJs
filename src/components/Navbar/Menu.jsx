/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';
import ProductMenuItems from './ProductMenuItems';
import './style.css';

function Menu() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(!dropdown);
  };

  const onMouseLeave = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav>
      <ul>
        <li
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="#">Products</Link>
          {dropdown && <DropdownMenu />}
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/gallery">Creative Gallery</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
