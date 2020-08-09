import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/StripeCheckoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { emptyCart } from '../redux/actions/cart';
// styles
import '../styles/checkOutPage.scss'

const CheckOutPage = ({ items, totalPrice, currentUser, emptyCart }) => {

    // Handle empty cart click event.
    const onEmptyCart = () => {
        // dispatch EMPTY_CART action.
        emptyCart();
    };

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {items.map(item => <CheckoutItem key={item.id} item={item} />)}
            {!!items.length  && <div className="empty-cart" onClick={onEmptyCart}>empty cart<FontAwesomeIcon className="trash-icon" icon={faTrash} /></div>}
            <div className="total">
                <span>TOTAL: ${totalPrice}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242-4242-4242-4242 - Exp: 01/25 - CVV: 123
            </div>
            {!currentUser && <p id="signin-pay">Please sign in to complete payment <Link className="signin-link" path="/signin">Sign In</Link></p>}
            <StripeCheckoutButton price={totalPrice} currentUser={currentUser} items={items} />
        </div>
    );
};

const mapStateToProps = ({ cart, user }) => ({
    items: cart.items,
    totalPrice: cart.items.reduce((accumulatedPrice, item) => accumulatedPrice + item.quantity * item.price, 0),
    currentUser: user.currentUser
});

const mapDispatchToProps = {
    emptyCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);