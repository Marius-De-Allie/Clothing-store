import  userReducer, { INITIAL_STATE } from '../../redux/reducers/user';
import { setCurrentUser } from '../../redux/actions/user';

describe('User reducer', () => {
    it('returns inital state when no state or action object is passed in', () => {
        expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    it('handles SET_CURRENT_USER action', () => {
        expect(userReducer(INITIAL_STATE, setCurrentUser({userName: 'JohnDoe', name: 'John Doe', id: 1})))
        .toEqual({...INITIAL_STATE, currentUser: {userName: 'JohnDoe', name: 'John Doe', id: 1}});
    });
});