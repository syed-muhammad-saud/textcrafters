import React from 'react';

export default function Footer() {
    return (
        <footer className="footer bg-dark text-light py-3">
         <div className="container text-center" style={{ color: 'white'
            
          }}>
            <h6>
            This website offers a comprehensive suite of text analysis tools designed
            to provide fast and efficient text conversion services. Easily convert
            your text to uppercase, lowercase, and other formats with our
            user-friendly text transformation tools. Whether you’re formatting text
            for documents, coding, or any project, our platform ensures a seamless
            experience.
            </h6>
            <p>&copy; {new Date().getFullYear()} TextCrafters. All rights reserved. Syed Muhammad Saud</p>
        </div>
    </footer>

    );
}
