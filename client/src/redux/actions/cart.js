const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN';
const REMOVE_CARTITEM = 'REMOVE_CARTITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

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

export { ADD_ITEM, TOGGLE_HIDDEN, REMOVE_CARTITEM, REMOVE_ITEM, addItem, toggleHidden, removeCartItem, removeItem };