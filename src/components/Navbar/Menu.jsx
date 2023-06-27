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
          <Button value="Products" classIdentifier="nav-link" />
          {dropdown && <DropdownMenu menuItems={<ProductMenuItems />} />}
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button value="Clients" classIdentifier="nav-link" />
          {dropdown && <DropdownMenu menuItems={<ClientMenuItems />} />}
        </li>
        <li>
          <Link to="/gallery" className="nav-link">Creative Gallery</Link>
        </li>
        <li>
          <Button value="Resources" classIdentifier="nav-link" />
        </li>
        <li>
          <Button value="Company" classIdentifier="nav-link" />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
