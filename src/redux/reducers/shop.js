import { UPDATE_COLLECTIONS } from '../actions/shop';

const INITIAL_STATE = {
    collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.collectionsMap
            }
        default:
            return state;
    }
};

export default shopReducer;