import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem } from '../redux/actions/cart';
// styles.
import '../styles/checkoutItem.scss';

const CheckoutItem = ({ item, removeCartItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt={item.name} />
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">{item.quantity}</span>
        <span className="price">{item.price}</span>
        <div className="remove-button" onClick={() => removeCartItem(item.id)}>&#10005;</div>
    </div>
);

const mapDispatchToProps = {
    removeCartItem
};

export default connect(null, mapDispatchToProps)(CheckoutItem);