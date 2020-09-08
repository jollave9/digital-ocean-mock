import React from 'react';
import '../CSS/Section1.css'

export default function Section1() {
    return (
        <div className="Section1">

            <div className="header">
                <div className="main-header">
                    <h1>Welcome to the developer cloud</h1>
                </div>

                <div className="sub-header">
                    <p>We make it simple to launch in the cloud and scale up as you grow – with an intuitive control panel, predictable pricing, team accounts, and more.</p>
                </div>
            </div>

            <div className="form">
                <h5>Deploy in seconds</h5>

                <form action="#">
                    <input type="text" placeholder="First name" name="firstname" />
                    <input type="email" placeholder="Email address" name="firstname" />
                    <input type="password" placeholder="Password" name="firstname" />
                    <input type="button" value="Sign Up with email" />
                </form>

                <div className="form-footer">
                    <button className="signup-with-google-btn">
                        <img style={{ marginRight: '6px', marginTop: '1px' }} src="https://images.prismic.io/www-static/8d18ab05-0db4-4fd7-95d1-c5fbc4b83fc2_icon-google.svg?auto=compress,format" />
                         Sign up with Google
                    </button>
                    <button className="signup-with-google-btn github-btn">

                        <img src="https://images.prismic.io/www-static/ae808fab-d9d7-458e-b368-05344b7ad308_icon-github.svg?auto=compress,format" />

                    </button>
                </div>

            </div>
        </div>
    )
}