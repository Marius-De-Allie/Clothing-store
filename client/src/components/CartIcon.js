import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { toggleHidden } from '../redux/actions/cart';
// styles.
import '../styles/cartIcon.scss';

const CartIcon = ({ toggleHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

/* REPLACE WITH RESELECT SELECTOR*/
const mapStateToProps = ({ cart }) => ({
    itemCount: cart.items.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0)
});

const mapDispatchToProps = {
    toggleHidden
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);