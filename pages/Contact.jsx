
import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>Contact Us</h1>

      <div className="contact-columns">
        {/* Contact Information */}
        <div className="contact-column">
          <h3>Head Office</h3>
          <p>Fluxa Interior Design.</p>
          <p>123 Modern Street</p>
          <p>Vavuniya City, Vavuniya.</p>
          <p>Email: contact@fluxainterior.com.</p>
          <p>Phone: +94-760733869.</p>
        </div>

        {/* Customer Support */}
        <div className="contact-column">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="#">Design Consulation Help.</a></li>
            <li><a href="#">Order Tracking.</a></li>
            <li><a href="#">Privacy & Data Security.</a></li>
            <li><a href="#">Design FAQs.</a></li>
          </ul>
        </div>

        {/* Social Media / Newsletter */}
        <div className="contact-column">
          <h3>Newsletter</h3>
          <p>Sign up for interior tips & trends!</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <p>© 2025 Fluxa Interior. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact
