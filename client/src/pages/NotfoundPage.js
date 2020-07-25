import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => (
    <div>
        404 page not found.
        <Link to="/">Return Home</Link>
    </div>
);

export default NotfoundPage;