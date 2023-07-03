import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <>
            <nav className='navbar'>
                <img className='navbar-logo' alt="" />
                <ul className='navbar-list'>
                    <li className='navbar-list__item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='navbar-list__item'>
                        <Link to="/tickets">Tickets</Link>
                    </li>
                    <li className='navbar-list__item'>
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
