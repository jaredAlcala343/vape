// src/components/Navbar.js
import React from 'react';
import './navbar.css';
import logo from './logo.png'; // Asegúrate de tener un logo en la carpeta 'src/images'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </nav>
    );
};

export default Navbar;
