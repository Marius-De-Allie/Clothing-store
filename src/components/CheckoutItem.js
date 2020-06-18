import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem, addItem, removeItem } from '../redux/actions/cart';
// styles.
import '../styles/checkoutItem.scss';

const CheckoutItem = ({ item, removeCartItem, addItem, removeItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt={item.name} />
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
            <div className="arrow">&#10094;</div>
            <span className="value">{item.quantity}</span>
            <div className="arrow">&#10095;</div>
        </span>
        <span className="price">{item.price}</span>
        <div className="remove-button" onClick={() => removeCartItem(item.id)}>&#10005;</div>
    </div>
);

const mapDispatchToProps = {
    removeCartItem,
    addItem,
    removeItem
};

export default connect(null, mapDispatchToProps)(CheckoutItem);