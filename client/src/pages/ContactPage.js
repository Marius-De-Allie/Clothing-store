import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => (
    <div className="contact-page">
        <FontAwesomeIcon icon={faHammer} />
        <h2>Page under construction, come back soon.</h2>
        <Link to="/" className="backhome-link">Return Home</Link>
    </div>
);

export default ContactPage;