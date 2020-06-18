import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import { toggleHidden } from '../redux/actions/cart'
// styles.
import '../styles/cartDropdown.scss';

const CartDropdown = ({ cartItems, toggleHidden }) => {
    const history = useHistory();

    const handleClick = () => {
        // redirect to checkout page.
        history.push("/checkout");
        // Hide cart
       toggleHidden();
    };

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                <span className="empty-message">Your cart is empty</span>
            }
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.items
});

const mapDispatchToProps = {
    toggleHidden
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);