import React, { useState } from 'react';
import './Resume.css';

export default function TextCrafters() {
    const [open, setOpen] = useState(null);

    const toggleAccordion = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="textcrafters-container">
            <header className="textcrafters-header">
                <h1>TextCrafters</h1>
                <p>A Professional Text Transformation Tool</p>
            </header>

            <section className="textcrafters-section">
                <h2>Project Overview</h2>
                <p>TextCrafters is an innovative web application designed to enhance text manipulation and transformation processes.</p>
            </section>

            <div className="accordion">
                <div className="accordion-item">
                    <button className="accordion-button" onClick={() => toggleAccordion(0)}>
                        Key Features
                    </button>
                    {open === 0 && (
                        <div className="accordion-content">
                            <ul>
                                <li>Convert text to uppercase, lowercase, and more.</li>
                                <li>Clear and reset text input quickly.</li>
                                <li>Change text color and apply styles dynamically.</li>
                                <li>Copy transformed text to clipboard with ease.</li>
                                <li>View insights like word count, character count, and estimated reading time.</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="accordion-item">
                    <button className="accordion-button" onClick={() => toggleAccordion(1)}>
                        Technology Stack
                    </button>
                    {open === 1 && (
                        <div className="accordion-content">
                            <ul>
                                <li>React.js for building interactive user interfaces</li>
                                <li>HTML5 and CSS3 for structured and styled content</li>
                                <li>JavaScript for dynamic functionality and interactivity</li>
                                <li>Bootstrap for responsive design and layout</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="accordion-item">
                    <button className="accordion-button" onClick={() => toggleAccordion(2)}>
                        User Experience
                    </button>
                    {open === 2 && (
                        <div className="accordion-content">
                            <p>The application is designed with user experience in mind, ensuring that all features are easily accessible and intuitive.</p>
                        </div>
                    )}
                </div>
            </div>

            
        </div>
    );
}
