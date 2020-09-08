import React from 'react';
import '../CSS/Section5.css'

export default function Section5() {
    return (
        <div className="Section5">

            <h1>Built for business</h1>
            <div className="content">
                <div>
                    <img src="https://images.prismic.io/www-static/7531f96f-5414-42c2-ba65-0d705769c62f_icon-check-shield.svg?auto=compress,format" alt="image" />
                    <h5>Reliable platform</h5>
                    <p>
                        More than 100,000 developer teams worldwide trust DigitalOcean to support their business with a 99.99% uptime SLA for all services.
                    </p>
                    <a href="#">Security</a>
                </div>
                <div>
                    <img src="https://images.prismic.io/www-static/4083b409-5e65-4403-86a8-7ed8f501a0d8_icon-task-list-multiple.svg?auto=compress,format" alt="image" />
                    <h5>Predictable pricing</h5>
                    <p>
                        Leave complex pricing structures behind. Always know what you’ll pay per month with a flat, industry-leading pricing structure.
                </p>
                    <a href="#">Pricing</a>
                </div>
                <div>
                    <img src="https://images.prismic.io/www-static/fccb0e1b-4de3-4b58-9f3e-5455f5c3aeae_icon-headphones-customer-support-human.svg?auto=compress,format" />
                    <h5>World-class service</h5>
                    <p>Free around-the-clock technical support for all customers, with additional benefits for premium support subscribers. You’ll feel the love.</p>
                    <a href="#">Support</a>
                </div>
                <div>
                    <img src="https://images.prismic.io/www-static/1c791b14-833f-4190-a865-a55e11055fc0_icon-certified-certificate.svg?auto=compress,format" />
                    <h5>Security and compliance</h5>
                    <p>
                        Keep your data protected. Our platform is certified on multiple international standards, including SOC 1 Type II, SOC 2 Type II, ISO/IEC 27001, and PCI-DSS.
                    </p>
                    <a href="#">Compliance</a>
                </div>
            </div>
        </div>
    )
}