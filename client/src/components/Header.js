import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { ReactComponent as Logo } from '../assets/lion.svg'
import { emptyCart } from '../redux/actions/cart';
// styles.
import '../styles/header.scss';

const Header = ({ currentUser, hidden, emptyCart, match }) => {
    // Sign out event handler.
    const onSignOut = () => {
        // sign out user via firebase.
        auth.signOut();
        // Empty shopping cart - dispatch empty cart action.
        emptyCart();
    };
    
    return (
        <div className="header">
            <NavLink className="logo-container" to="/">
                <Logo className="logo" />
            </NavLink>
            <div className="options">
                <NavLink  activeClassName="active" className="option" to="/shop">SHOP</NavLink>
                <NavLink  activeClassName="active" className="option" to="/contact">CONTACT</NavLink>
                {
                    currentUser ? 
                    <div className="option" id="sign-out" onClick={onSignOut}>SIGN OUT</div> :
                    <NavLink  activeClassName="active" className="option" to="/signin">SIGN IN</NavLink>
                }
                <CartIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    );
};
    
const mapStateToProps = ({ user, cart }) => ({
    currentUser: user.currentUser,
    hidden: cart.hidden
});

const mapDispatchToProps = {
    emptyCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);