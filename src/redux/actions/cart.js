const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN';
const REMOVE_ITEM = 'REMOVE_ITEM';

const addItem = item => ({
    type: ADD_ITEM,
    item
});

const toggleHidden = () => ({
    type: TOGGLE_HIDDEN
});

const removeItem = id => ({
    type: REMOVE_ITEM,
    id
});

export { ADD_ITEM, TOGGLE_HIDDEN, REMOVE_ITEM, addItem, toggleHidden, removeItem };