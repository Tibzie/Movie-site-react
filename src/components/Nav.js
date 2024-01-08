import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo-temporary.svg';


const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="logo"></img>
                    <span>The list</span>
                </Link>
                
                <ul className="navbar-list">
                    <li className="navbar-list__item">
                        <Link to="/" className="navbar-list__item-link">Home</Link>
                    </li>
                    <li className="navbar-list__item">
                        <Link to="/tickets" className="navbar-list__item-link">Tickets</Link>
                    </li>
                    <li className="navbar-list__item">
                        <Link to="/contact" className="navbar-list__item-link">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
