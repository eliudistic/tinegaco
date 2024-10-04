import React, { useState } from 'react';
import './Navbar.css'; // Include relevant styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="tinega_logo.png" alt="Tinega.co Logo" />
      </div>
      <ul className={menuOpen ? 'nav-links nav-active' : 'nav-links'}>
        <li><a href="#filedocr">Filedocr</a></li>
        <li><a href="#xubhaven">Xubhaven</a></li>
        <li><a href="#procedureoes">Procedureoes</a></li>
        <li><a href="#encyclopedai">EncyclopedAI</a></li>
      </ul>
      <div className="menu-icon" onClick={handleMenuClick}>
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
};

export default Navbar;

