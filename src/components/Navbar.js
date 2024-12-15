import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { link: '#home', label: 'Inicio' },
    { link: '#about', label: 'Sobre mí' },
    { link: '#services', label: 'Servicios' },
    { link: '#contact', label: 'Contacto' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">MiLogo</a>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Abrir menú de navegación"
        >
          ☰
        </button>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} link={item.link} label={item.label} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
