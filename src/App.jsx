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
                <p>Welcome to the landing page.</p>
            </section>

            <section id="about" className="section">
                <h1>About Section</h1>
                <p>Learn more about us here.</p>
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