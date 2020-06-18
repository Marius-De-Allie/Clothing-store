import { ADD_ITEM, TOGGLE_HIDDEN, REMOVE_CARTITEM, REMOVE_ITEM } from '../actions/cart';
import { addItemToCart, removeItemFromCart } from '../utils/cart';

const INITIAL_STATE = {
    hidden: true,
    items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.item)
            }
        case TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case REMOVE_CARTITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: removeItemFromCart(state.items, action.item)
            }
        default:
            return state;
    }
};

export default cartReducer;