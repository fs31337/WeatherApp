import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import styles from './Nav.modules.css';

function Nav({ onSearch }) { //agrego cities
  return (
    <div>
      <nav className=" navbarstyle">
        <div className="logo">
          <img src={Logo} alt="Henry Logo" className="logoHenry" />
          <p>Henry - Weather App</p>
        </div>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};

export default Nav;
