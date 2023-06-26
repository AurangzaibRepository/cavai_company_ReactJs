import React from 'react';
import Label from '../Label';
import Menu from './Menu';
import './style.css';

function Navbar() {
  return (
    <div id="dv-navbar">
      <Label
        value="CAVAI"
        id="label-company"
      />
      <Menu />
    </div>
  );
}

export default Navbar;
