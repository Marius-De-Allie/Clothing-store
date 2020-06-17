const SET_CURRENT_USER = 'SET_CURRENT_USER';

const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export { setCurrentUser, SET_CURRENT_USER };