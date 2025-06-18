// App.js (updated)
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 100;
            const sections = ['home', 'about', 'chatbot'];

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <div className="app">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <nav className="navbar">
            <ul>
                <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Us</a></li>
                <li><a href="#chatbot" className={activeSection === 'chatbot' ? 'active' : ''}>Chatbot</a></li>
            </ul>
        </nav>

        <div className="content">
            <section id="home" className="section">
                <h1>Valora</h1>
                <h3>A financial analyst AI chatbot powered by
                    TCS Spring Interns</h3>
            </section>

            <section id="about" className="section about-section">
                <h1 className="about-title">What are we?</h1>
                <h3 className="about-subtitle">About Information</h3>
                <p className="about-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>

                <h3 className="our-services">Our Services</h3>

                <div className="services-container">
                    <div className="service-box">
                        <h4>Company Profile Information</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="profile-btn">
                            &#10140; More Company Profiles
                        </button>
                    </div>

                    <div className="service-box">
                        <h4>Chatbot Information</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </section>


            <section id="chatbot" className="section">
                <h1>Chatbot Section</h1>
                <p>Chat with our assistant here.</p>
            </section>
        </div>
    </div>
)
    ;
}

export default App;