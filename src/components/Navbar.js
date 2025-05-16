import { Link } from 'react-router-dom';

import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
