import React from 'react';
import '../CSS/Section6.css'

export default function Section6() {
    return (
        <div className="Section6">
            <div className="header">

                <div className="main-header">
                    <h2>Service your customers around the world from 13 data centers.</h2>
                </div>

                <div className="sub-header">
                    <p>Run your infrastructure near your customers. Industry-low <a href="https://blog.digitalocean.com/its-all-about-the-bandwidth-why-many-network-intensive-services-select-digitalocean-as-their-cloud/">bandwidth pricing</a>, with generous quotas and add-on transfer at just $.01/GiB, makes DigitalOcean perfect for network-heavy apps like VPN and video.</p>
                </div>

            </div>

            <div className="content">
                <ul>
                    <li><span className="code">AMS2</span><span className="place">Amsterdam, Netherlands</span><a href="#">Test Speed</a></li>
                    <li><span className="code">BLR1</span><span className="place">Bangalore, India</span><a href="#">Test Speed</a></li>
                    <li><span className="code">LON1</span><span className="place">London, UK</span><a href="#">Test Speed</a></li>
                    <li><span className="code">NYC2</span><span className="place">New York, NY</span><a href="#">Test Speed</a></li>
                    <li><span className="code">SFO1</span><span className="place">San Francisco, CA</span><a href="#">Test Speed</a></li>
                    <li><span className="code">SFO3</span><span className="place">San Francisco, CA</span><a href="#">Test Speed</a></li>
                    <li><span className="code">TOR1</span><span className="place">Toronto, Canada</span><a href="#">Test Speed</a></li>
                </ul>
                <ul>
                    <li><span className="code">AMS3</span><span className="place">Amsterdam, Netherlands</span><a href="#">Test Speed</a></li>
                    <li><span className="code">FRA1</span><span className="place">Bangalore, India</span><a href="#">Test Speed</a></li>
                    <li><span className="code">NYC1</span><span className="place">London, UK</span><a href="#">Test Speed</a></li>
                    <li><span className="code">NYC3</span><span className="place">New York, NY</span><a href="#">Test Speed</a></li>
                    <li><span className="code">SFO2</span><span className="place">San Francisco, CA</span><a href="#">Test Speed</a></li>
                    <li><span className="code">SGP1</span><span className="place">San Francisco, CA</span><a href="#">Test Speed</a></li>
                </ul>
            </div>
        </div>
    )
}