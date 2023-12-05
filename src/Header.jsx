import React from 'react';
import './Header.css';
import logo from './movieLogo.png'

const Header = () => {
    return (
    <header className="header">
        <div className='logo-and-title'>
        <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    <div className="title">Movie Database Explorer </div>
    </div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Favorites</a></li>
      </ul>
    </nav>
  </header>
  );


}

export default Header;