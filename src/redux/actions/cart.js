const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN';

const addItem = item => ({
    type: ADD_ITEM,
    item
});

const toggleHidden = () => ({
    type: TOGGLE_HIDDEN
});

export { ADD_ITEM, TOGGLE_HIDDEN, addItem, toggleHidden };