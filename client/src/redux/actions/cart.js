const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN';
const REMOVE_CARTITEM = 'REMOVE_CARTITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const EMPTY_CART = 'EMPTY_CART';

const addItem = item => ({
    type: ADD_ITEM,
    item
});

const toggleHidden = () => ({
    type: TOGGLE_HIDDEN
});

const removeCartItem = id => ({
    type: REMOVE_CARTITEM,
    id
});

const removeItem = item => ({
    type: REMOVE_ITEM,
    item
});

const emptyCart = () => ({
    type: EMPTY_CART
});

export { ADD_ITEM, TOGGLE_HIDDEN, REMOVE_CARTITEM, REMOVE_ITEM, EMPTY_CART, addItem, toggleHidden, removeCartItem, removeItem, emptyCart };