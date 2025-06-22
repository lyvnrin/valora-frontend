import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './chatbot.css';

function ChatbotPage() {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    const [messages, setMessages] = useState([]);
    const [hasStarted, setHasStarted] = useState(false);
    const [inputText, setInputText] = useState('');
    const chatEndRef = useRef(null);

    // Auto scroll to bottom
    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputText.trim() !== '') {
            setMessages(prev => [...prev, { sender: 'user', text: inputText.trim() }]);
            setInputText('');
            setHasStarted(true);
        }
    };

    const handleNewChat = () => {
        setMessages([]);
        setHasStarted(false);
        setInputText('');
    };

    return (
        <div className="chatbot-page">
            {/* sidebar */}
            <aside className={`sidebar ${expanded ? 'expanded' : ''}`}>
                <div className="sidebar-top">
                    <button onClick={() => setExpanded(!expanded)}>
                        ☰ {expanded && <span className="btn-text">Menu</span>}
                    </button>
                    <button onClick={handleNewChat}>
                        ＋ {expanded && <span className="btn-text">New Chat</span>}
                    </button>
                </div>
                <div className="sidebar-bottom">
                    <button>
                        ⚙ {expanded && <span className="btn-text">Settings</span>}
                    </button>
                </div>
            </aside>

            {/* main content */}
            <main className="main-content">
                <header className="chatbot-header">
                    <h2 className="valora-link" onClick={() => navigate('/')}>
                        Valora
                    </h2>
                    <button className="profiles-button" onClick={() => navigate('/companyprofile')}>
                        Company Profiles
                    </button>
                </header>

                <section className="chatbot-body">
                    {!hasStarted && <h1>Hello, User</h1>}

                    <div className="chat-scroll-container">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chat-message ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            className="chat-input"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button className="send-button" onClick={handleKeyDown}>Send</button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ChatbotPage;
