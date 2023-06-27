/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';
import Button from '../Button';
import ProductMenuItems from './ProductMenuItems';
import ClientMenuItems from './ClientMenuItems';
import './style.css';

function Menu() {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(!dropdown);
  };

  const handleMouseLeave = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav>
      <ul>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Products</Link>
          {dropdown && <DropdownMenu menuItems={<ProductMenuItems />} />}
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Clients</Link>
          {dropdown && <DropdownMenu menuItems={<ClientMenuItems />} />}
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
