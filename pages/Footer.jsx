import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 FLUXA INTERIOR DESIGN</p>
      <div className="footer-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-behance"></i></a>
      </div>
    </footer>
  );
};

export default Footer;