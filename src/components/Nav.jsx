import React from 'react';
// import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.scss';


function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-brand">
          {/* <img id="logoHenry" src={} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
          Weather App
        </span>
      </Link>
      <SearchBar
        onSearch={onSearch}
      />
      <Link to = '/about'>
        <span className="navbar-about">About</span>
      </Link>
    </nav>
  );
};

export default Nav;
