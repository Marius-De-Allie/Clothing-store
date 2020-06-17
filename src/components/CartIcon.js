import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { toggleHidden } from '../redux/actions/cart';
// styles.
import '../styles/cartIcon.scss';

const CartIcon = ({ toggleHidden }) => (
    <div className="cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToprops = ({
    toggleHidden
});

export default connect(null, mapDispatchToprops)(CartIcon);