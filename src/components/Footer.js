import React, { useState } from 'react';
import './Footer.scss';
import logo from '../assets/plant.png'; // optional decorative logo

const socialLinks = ['Instagram', 'Twitter', 'LinkedIn', 'Telegram', 'Pinterest'];

const Footer = () => {
  const [active, setActive] = useState('Telegram');

  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logo} alt="logo" className="footer-logo" />
        <h2>Join the community!</h2>
        <p>
          Subscribe to The Forager to receive monthly plant tips,
          store updates, promotions & more
        </p>
      </div>

      <div className="footer-social">
        {socialLinks.map((link, i) => (
          <button
            key={i}
            className={`social-btn ${active === link ? 'active' : ''}`}
            onClick={() => setActive(link)}
          >
            {link}
          </button>
        ))}
      </div>

      <div className="footer-bottom">
        <p>©2023, All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
