import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAIL } from '../actions/shop';

export const INITIAL_STATE = {
    collections: null,
    isLoading: true,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isLoading: true ? state.isLoading : true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.collectionsMap,
                isLoading: false
            }
        case FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.errorMessage
            }
        default:
            return state;
    }
};

export default shopReducer;