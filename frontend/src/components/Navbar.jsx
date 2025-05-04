import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>LearnOnline</h2>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </nav>
);

export default Navbar;
