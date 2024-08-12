import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="navbar-link">Signup</Link>
        </li>
        <li>
          <Link to="/items/new" className="navbar-link">Create Item</Link>
        </li>
        <li>
          <Link to="/items" className="navbar-link">Item List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
