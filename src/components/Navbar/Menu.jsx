/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';
import Button from '../Button';
import ProductMenuItems from './ProductMenuItems';
import ClientMenuItems from './ClientMenuItems';
import ResourceMenuItems from './ResourceMenuItems';
import './style.css';

function Menu() {
  const [productDropdown, setProductDropdown] = useState(false);
  const [clientDropdown, setClientDropdown] = useState(false);

  return (
    <nav>
      <ul>
        <li
          onMouseEnter={() => setProductDropdown(!productDropdown)}
          onMouseLeave={() => setProductDropdown(!productDropdown)}
        >
          <Button value="Products" classIdentifier="nav-link" />
          {productDropdown && <DropdownMenu menuItems={ProductMenuItems} />}
        </li>
        <li
          onMouseEnter={() => setClientDropdown(!clientDropdown)}
          onMouseLeave={() => setClientDropdown(!clientDropdown)}
        >
          <Button value="Clients" classIdentifier="nav-link" />
          {clientDropdown && <DropdownMenu menuItems={ClientMenuItems} />}
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
