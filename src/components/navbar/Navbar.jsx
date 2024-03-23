import React from 'react';
import { Link } from "react-router-dom"
import './nav.css'
import pageIcon from '/public/logo.png';

const Navbar = () => {
    return (
        <>
            <div className="header">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <Link
                                    to="/"
                                    className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}><img src={pageIcon} alt="Logo" className="d-inline-block align-text-top"></img> </Link>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link
                                    to="/About"
                                    className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                to="/Projects"
                                className={window.location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Contact"
                                    className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
