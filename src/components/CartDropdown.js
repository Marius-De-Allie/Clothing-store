import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
// styles.
import '../styles/cartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
            <span className="empty-message">Your cart is empty</span>
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.items
})

export default connect(mapStateToProps)(CartDropdown);