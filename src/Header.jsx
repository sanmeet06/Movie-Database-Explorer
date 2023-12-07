import React from 'react';
import './Header.css';
import logo from './movieLogo.png';
import { Link } from 'react-router-dom';

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
      <li>
            <Link to="/">Home</Link>
          </li>
        <li>
            <Link to="/favorites">Favorites</Link>
          </li>
      </ul>
    </nav>
  </header>
  );


}

export default Header;