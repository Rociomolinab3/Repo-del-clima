import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.module.css';
import { Link } from 'react-router-dom';



function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-brand">
          {/* <img id="logoHenry" src={Logo} width="80" height="30" className="d-inline-block align-top" alt="" /> */}
                   Weather App - Home   
        </span>
      </Link>
      <Link to='/about'>
        <span className="navbar-about">About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />

    </nav>
  );
};
export default Nav;