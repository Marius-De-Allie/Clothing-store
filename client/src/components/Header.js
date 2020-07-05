import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { ReactComponent as Logo } from '../assets/crown.svg'
// styles.
import '../styles/header.scss';

const Header = ({ currentUser, hidden }) => (
    
    <div className="header">
        <NavLink className="logo-container" to="/">
            { /*logo here */ }
            <Logo className="logo" />
        </NavLink>
        <div className="options">
            <NavLink  activeClassName="active" className="option" to="/shop">SHOP</NavLink>
            <NavLink  activeClassName="active" className="option" to="/shop">CONTACT</NavLink>
            {
                currentUser ? 
                <div className="option" id="sign-out" onClick={() => auth.signOut()}>SIGN OUT</div> :
                <NavLink  activeClassName="active" className="option" to="/signin">SIGN IN</NavLink>
            }
            <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
    </div>
);

const mapStateToProps = ({ user, cart }) => ({
    currentUser: user.currentUser,
    hidden: cart.hidden
});

export default connect(mapStateToProps)(Header);