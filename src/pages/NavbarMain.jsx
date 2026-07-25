import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css' 

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <h2>FLUXA Interior Design</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Ourservices">Our Service</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/Aboutus">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Login">Sign up</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar