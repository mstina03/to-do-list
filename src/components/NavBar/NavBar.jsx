import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="nav-bar">
            <h2 className="nav-logo">📓 My Notebook</h2>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#tasks" onClick={closeMenu}>View Tasks</a></li>
                <li><a href="#addnew" onClick={closeMenu}>Add Task</a></li>
                <li><a href="#contacts" onClick={closeMenu}>View Contacts</a></li>
                <li><a href="#addcontact" onClick={closeMenu}>Add Contact</a></li>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            </div>
        </nav>
    );
};

export default NavBar;
