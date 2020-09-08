import React from 'react';
import '../CSS/Section7.css'

export default function Section7() {
    return (
        <div className="Section7">

            <div className="header">
                <div className="main-header">
                    <h1>Development teams love DigitalOceans</h1>
                </div>
                <div className="sub-header">
                    <p>Easily organize your infrastructure with Projects. And with Teams, everyone can get their own account, with just the privileges they need to do their jobs.</p>
                </div>
            </div>

            <div className="image">
                <img src="https://images.prismic.io/www-static/16673e66-0c2f-417b-88bb-f02cc12b8fda_rockerbox-logo-51462da2.png?auto=compress,format" />
                <h1>We have been able to make scaling the technical infrastructure of our business cost effective and efficient.</h1>
                <p>Rick O’Toole</p>
                <p>Co-founder and CTO</p>
            </div>

            <div className="section-footer">

                <button type="button" className="active"></button>
                <button type="button"></button>
                <button type="button"></button>
                <button type="button"></button>
                <button type="button"></button>

            </div>

        </div>
    )
}