import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid mt-2">
            <a className="navbar-brand" href="#">Suslu</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars}  style={{color:"orange"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/ademsuslu">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
};

export default Navbar;
