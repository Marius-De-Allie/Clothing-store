import { SET_CURRENT_USER } from '../actions/user';

export const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state;
    }
};

export default userReducer;