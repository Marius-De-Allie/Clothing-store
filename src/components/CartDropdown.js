import React from 'react';
import CustomButton from './CustomButton';
// styles.
import '../styles/cartDropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;