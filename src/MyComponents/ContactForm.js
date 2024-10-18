import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        from_name: '',     // Matches {{from_name}} in EmailJS template
        from_email: '',    // Matches {{from_email}} in EmailJS template
        work: '',          // Matches {{work}} in EmailJS template
        message: '',       // Matches {{message}} in EmailJS template
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Data:', formData); // Log the form data for debugging

        // Send the email using EmailJS
        emailjs.send('service_d4u7q1p', 'template_aar72pr', formData, 'RxQ5xbTHconB3ypeB')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, (err) => {
                console.error('FAILED...', err);
                alert('Failed to send the message. Please try again.');
            });

        // Clear the form
        setFormData({
            from_name: '',
            from_email: '',
            work: '',
            message: '',
        });
    };

    return (
        <div className="container my-4">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="from_name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="from_name"
                        name="from_name" // Matches the state key
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="from_email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="from_email"
                        name="from_email" // Matches the state key
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="work" className="form-label">Type of Work</label>
                    <select
                        className="form-select"
                        id="work"
                        name="work" // Matches the state key
                        value={formData.work}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select...</option>
                        <option value="SEO">SEO</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Content Creation">Content Creation</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message" // Matches the state key
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
