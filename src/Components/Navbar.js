import React from 'react';
import '../CSS/Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div>
                <img src="https://images.prismic.io/www-static/49aa0a09-06d2-4bba-ad20-4bcbe56ac507_logo.png?auto=compress,format" alt="DigitalOcean logo" className='img-logo' />
            </div>

            <div className='navbar-menu'>
                <a href="#">Products</a>
                <a href="#">Solutions</a>
                <a href="#">Marketplace</a>
                <a href="#">Customer</a>
                <a href="#">Community</a>
                <a href="#">Pricing</a>
            </div>


            <div className="navbar-buttons">

                <button className="signup-btn">
                    <a href="#">Sign Up</a>
                </button>

                <button className="signin-btn">
                    <a href="#">Sign In</a>
                </button>

            </div>
        </div>
    )
}