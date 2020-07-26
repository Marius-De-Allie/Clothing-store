import React from 'react';
import { Link } from 'react-router-dom';
// Styles.
import '../styles/notfoundPage.scss';

const NotfoundPage = () => (
    <div className="not-found-container">
        <h2>404 page not found</h2>
        <Link className="home-link" to="/">Return Home</Link>
    </div>
);

export default NotfoundPage;