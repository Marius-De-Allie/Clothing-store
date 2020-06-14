import React from 'react';
import { Link } from 'react-router-dom';
// styles.
import '../styles/header.scss';

const Header = () => (
    
    <div className="header">
        <Link className="logo-container" to="/">
            LOGO HERE
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
        </div>
    
    </div>
);

export default Header;