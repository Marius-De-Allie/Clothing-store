import * as userActions from '../../redux/actions/user';

it('setCurrentUser action creator returns correct action object', () => {
    const user = {
        id: 1,
        username: 'johndoe',
        name: 'John Doe'
    };
    const expectedAction = {
        type: userActions.SET_CURRENT_USER,
        user: {
            id: 1,
            username: 'johndoe',
            name: 'John Doe'
        }
    };
    expect(userActions.setCurrentUser(user)).toEqual(expectedAction);
});