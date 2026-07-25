import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';




const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <h2>FLUXA Interior Design</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li className="dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
          <span className="dropdown-toggle">Our Service</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/services/bathroom">Bathroom</Link></li>
              <li><Link to="/services/bedroom">Bedroom</Link></li>
              <li><Link to="/services/kitchen">Kitchen</Link></li>
              <li><Link to="/services/livingroom">Living Room</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/Aboutus">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Login">Sign up</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        <li><Link to="/OrderForm">OrderNow</Link></li>
        
     </ul>
    </nav>
  );
};

export default Navbar;
