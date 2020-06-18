const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN';
const REMOVE_CARTITEM = 'REMOVE_CARTITEM';

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

export { ADD_ITEM, TOGGLE_HIDDEN, REMOVE_CARTITEM, addItem, toggleHidden, removeCartItem };