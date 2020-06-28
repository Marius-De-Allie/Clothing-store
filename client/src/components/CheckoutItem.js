import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem, addItem, removeItem } from '../redux/actions/cart';
// styles.
import '../styles/checkoutItem.scss';

const CheckoutItem = ({ item, removeCartItem, addItem, removeItem }) => {
    // Add cart item on click event handler function.
    const onAddItemClick = () => {
        addItem(item);
    };

    // Remove cart item on click event handler function.
    const onRemoveItemClick = () => {
        removeItem(item);
    };

    // Remove all quantities of specific cart item on click event handler function.
    const onRemoveCartItemClick = () => {
        removeCartItem(item.id);
    };

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <div className="arrow" onClick={onRemoveItemClick}>&#10094;</div>
                <span className="value">{item.quantity}</span>
                <div className="arrow" onClick={onAddItemClick}>&#10095;</div>
            </span>
            <span className="price">{item.price}</span>
            <div className="remove-button" onClick={onRemoveCartItemClick}>&#10005;</div>
        </div>
    );

};


const mapDispatchToProps = {
    removeCartItem,
    addItem,
    removeItem
};

export default connect(null, mapDispatchToProps)(CheckoutItem);