/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './style.css';

function Navbar() {
  return (
    <div id="dv-navbar">
      <Link to="/" id="label-company">CAVAI</Link>
      <Menu />
    </div>
  );
}

export default Navbar;
