import React from 'react';

export default function Footer() {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container text-center">
                <h5 className="mb-3" style={{ fontWeight: 'bold' }}>
                    Explore the Power of Text Transformation
                </h5>
                <p className="mb-4">
                    At TextCrafters, we provide a comprehensive suite of text analysis tools designed to enhance your productivity. From simple text conversions to advanced formatting options, our platform is here to support all your text needs.
                </p>

                <div className="footer-info mb-4">
                    <p className="mb-1">
                        &copy; {new Date().getFullYear()} TextCrafters. All rights reserved.
                    </p>
                    <p>
                        This project is proudly brought to you by NJ Digital Company, developed by Syed Muhammad Saud.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="about" className="text-light mx-2">About Us</a>
                    <a href="contact" className="text-light mx-2">Contact</a>
                </div>
            </div>
        </footer>
    );
}
