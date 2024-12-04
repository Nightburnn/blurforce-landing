import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/Logo.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="BlurForce Logo" className="logo" />
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="#works">Works</a></li>
            <li className="nav-item"><a className="nav-link" href="#people">People</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacts">Contacts</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
