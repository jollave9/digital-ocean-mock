import React from 'react';
import '../CSS/Section4.css'

export default function Section4() {
    return (
        <div className="Section4">

            <div className="header">
                <div className="main-header">
                    <h1>Designed for developers</h1>
                </div>
                <div className="sub-header">
                    <p>Build more and spend less time managing your infrastructure with our easy-to-use control panel and API.</p>
                </div>
            </div>

            <div className="image">
                <img src="https://images.prismic.io/www-static/ba01040c-a47a-43c9-995d-4ed05a5dc4c9_screenshot-create-kubernetes-cluster-4a930955.jpg?auto=compress,format" alt="image" />
            </div>

            <div className="section-footer">
                <p>Use Kubernetes to improve availability, scalability, and resource efficiency of your containerized applications.</p>

                <button type="button" className="active"></button>
                <button type="button"></button>
                <button type="button"></button>
                <button type="button"></button>
                <button type="button"></button>

            </div>

        </div>
    )
}