import React, { useState } from 'react'
import './style.scss';
import { MdOutlineSearch, MdNotifications, MdArrowDropDown } from "react-icons/md";
import logo from "../../logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <Link to='/' className='logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div>
                    <Link to="/" className="nav-link">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="nav-link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="nav-link">
                        <span>Movies</span>
                    </Link>
                    <a href="/" className="nav-link">New and Popular</a>
                    <a href="/" className="nav-link">My List</a>
                    </div>
                </div>
                <div className="right">
                    <MdOutlineSearch className="icon" />
                    <a href="/" className="nav-link">KID</a>
                    <MdNotifications className="icon" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <MdArrowDropDown className="icon" />
                        <div className="options">
                            <a href="/" className="nav-link">Settings</a>
                            <a href="/" className="nav-link">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar