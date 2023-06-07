import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav-body">
      <h1 className="app-name">Math Magicians</h1>
      <nav className="nav-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/quotes">Quote</NavLink>
      </nav>
    </div>
  );
}
