import React from 'react';
// styles.
import '../styles/cartItem.scss';

const CartItem = ({ item }) => (

    <div className="cart-item">
        <img src={item.imageUrl} alt={item.name} />
        <div className="item-details">
            <span className="name">{item.name}</span>
            <span className="price">{item.qantity} x ${item.price}</span>
        </div>
    </div>
);

export default CartItem;