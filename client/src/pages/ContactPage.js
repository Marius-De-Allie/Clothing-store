import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
// styles.
import '../styles/contactPage.scss';

const ContactPage = () => (
    <div className="contact-page">
        <FontAwesomeIcon className="icon"  size="4x" icon={faHammer} />
        <h2 className="contact-heading">Page under construction, come back soon.</h2>
        <Link to="/" className="backhome-link">Return Home</Link>
    </div>
);

export default ContactPage;