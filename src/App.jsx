import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ChatbotPage from './ChatbotPage';
import './App.css';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="app">
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#chatbot">Chatbot</a></li>
                </ul>
            </nav>

            <div className="content">
                <section id="home" className="section">
                    <h1>Valora</h1>
                    <h3>A financial analyst AI chatbot powered by TCS Spring Interns</h3>
                </section>

                <section id="about" className="section about-section">
                    {/* ... same as before ... */}
                </section>

                <section id="chatbot" className="section chatbot-section">
                    <h1 className="chatbot-title">Ready to get started?</h1>
                    <p className="chatbot-subtitle">
                        Give your data a voice, narrate the numbers,<br />
                        and drive strategic action
                    </p>

                    <div className="chatbot-card">
                        <div className="chatbot-card-header">
                            <span className="dot">●</span>
                            <strong>Valora</strong>
                            <button className="close-btn">×</button>
                        </div>
                        <p className="chatbot-card-text">
                            Your NYSE stock analysis report (Q1–Q3 2025) is ready.
                        </p>
                    </div>

                    {/* 🔗 Navigate to separate page on button click */}
                    <button className="chatbot-button" onClick={() => navigate('/chatbot')}>
                        Talk to Valora
                    </button>

                    <footer className="chatbot-footer">
                        <span>Look Under the Hood</span>
                        <span>About TCS</span>
                    </footer>
                </section>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
            </Routes>
        </Router>
    );
}

export default App;
