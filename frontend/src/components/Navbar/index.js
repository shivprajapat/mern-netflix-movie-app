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
                    <div className='nav-items'>
                    <Link to="/">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies">
                        <span>Movies</span>
                    </Link>
                    <a href="/">New and Popular</a>
                    <a href="/">My List</a>
                    </div>
                </div>
                <div className="right">
                    <MdOutlineSearch className="icon" />
                    <a href="/">KID</a>
                    <MdNotifications className="icon" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <MdArrowDropDown className="icon" />
                        <div className="options">
                            <a href="/">Settings</a>
                            <a href="/">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar