import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
// styles.
import '../styles/header.scss';

const Header = ({ currentUser }) => (
    
    <div className="header">
        <Link className="logo-container" to="/">
            LOGO HERE
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                 <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps)(Header);