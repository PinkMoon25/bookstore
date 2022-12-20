import React from 'react';
import { NavLink } from 'react-router-dom'; // eslint-disable-line

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav className="navbar">
      <li key={1}><NavLink to="/bookstore">Books</NavLink></li>
      <li key={2}><NavLink to="/categories">Categories</NavLink></li>
    </nav>
  </header>
);

export default Header;
