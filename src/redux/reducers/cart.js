import { ADD_ITEM, TOGGLE_HIDDEN, REMOVE_ITEM } from '../actions/cart';
import { addItemToCart } from '../utils/cart';

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
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
};

export default cartReducer;