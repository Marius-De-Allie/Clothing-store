import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/StripeCheckoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// styles
import '../styles/checkOutPage.scss'

const CheckOutPage = ({ items, totalPrice }) => (
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
        <div className="empty-cart">empty cart<FontAwesomeIcon className="trash-icon" icon={faTrash} /></div>
        <div className="total">
            <span>TOTAL: ${totalPrice}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242-4242-4242-4242 - Exp: 01/25 - CVV: 123
        </div>
        <StripeCheckoutButton price={totalPrice}/>
    </div>
);

const mapStateToProps = ({ cart }) => ({
    items: cart.items,
    totalPrice: cart.items.reduce((accumulatedPrice, item) => accumulatedPrice + item.quantity * item.price, 0)
})

export default connect(mapStateToProps)(CheckOutPage);