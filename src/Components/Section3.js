import React from 'react';
import '../CSS/Section3.css'

export default function Section3() {
    return (
        <div className="Section3">
            <div className="header">
                <div className="main-header">
                    <h1>Deploy and scale seamlessly</h1>
                </div>
                <div className="sub-header">
                    <p>Our optimized configuration process saves your team time when running and scaling distributed applications, AI & machine learning workloads, hosted services, client websites, or CI/CD environments.</p>
                </div>
            </div>

            <div className="container">
                <div className="side-nav">
                    <a className="active" href="#">Deploy</a>
                    <a href="#">Scale</a>
                    <a href="#">Store</a>
                    <a href="#">Secure</a>
                    <a href="#">Monitor</a>
                </div>
                <div className="main-content">
                    <div>
                        <img src="https://images.prismic.io/www-static/16ae92b4-6939-446c-b6a3-0ffec01cdc14_kublogoicon.svg?auto=compress,format" alt="Kubernetes icon" />
                        <h5>Kubernetes in minutes</h5>
                        <p>Spin up a managed Kubernetes cluster in just a few clicks. Simply specify the size and location of your worker nodes.</p>
                    </div>
                    <div>
                        <img src="https://images.prismic.io/www-static/9d343e9c-fe74-4979-8ad9-e8efc58d6ee7_dropletinboxicon.svg?auto=compress,format" alt="droplet in box icon" />
                        <h5>Flexible compute types</h5>
                        <p>With Basic, General Purpose, CPU-Optimized or Memory-Optimized Droplets, you can choose the right infrastructure for your workload.</p>
                    </div>
                    <div>
                        <img src="https://images.prismic.io/www-static/936bb585-99ba-460d-ae2f-7bbdae8896cc_stacksplusicon.svg?auto=compress,format" alt="boxes with plus icon" />
                        <h5>1-Click App Marketplace</h5>
                        <p>Quickly deploy projects using one of our preconfigured 1-Click Apps, like LAMP, Docker, and WordPress.</p>
                    </div>
                    <div>
                        <img src="https://images.prismic.io/www-static/0eee6655-dfce-46b2-ab48-f40ff27d8a73_globeicon.svg?auto=compress,format" alt="globe icon" />
                        <h5>Global availability</h5>
                        <p>Deploy to any of our data center locations – New York, SF, London, Amsterdam, Bangalore, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}