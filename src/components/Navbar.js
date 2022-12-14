import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
        <div className='navbar-brand px-4'>
            Github Search
        </div>
        <ul className='navbar-nav'>
            <li className='navbar-item'>
                <NavLink exact="true" to='/' className='nav-link'>Home</NavLink>
            </li>
            <li className='navbar-item'>
                <NavLink to='/about' className='nav-link'>About</NavLink>
            </li>
            <li className='navbar-item'>
                <NavLink to='/profile' className='nav-link'>Profile</NavLink>
            </li>
        </ul>
    </nav>
)