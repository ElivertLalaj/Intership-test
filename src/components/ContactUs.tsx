import React, { useState, useEffect } from 'react';
import '../Css/Contact.css';

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Retrieve messages from localStorage
    const savedMessages = localStorage.getItem('contactMessages');
    if (savedMessages) {
      console.log('Saved Messages:', JSON.parse(savedMessages));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMessage: ContactMessage = { name, email, message };

    // Retrieve existing messages
    const savedMessages = localStorage.getItem('contactMessages');
    const messages = savedMessages ? JSON.parse(savedMessages) : [];

    // Add new message to messages
    messages.push(newMessage);

    // Save updated messages to localStorage
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    setSubmitted(true);
  };

  return (
    <div className="contact-form-container">
      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for your message!</h2>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
