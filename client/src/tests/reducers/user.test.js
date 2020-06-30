import  userReducer, { INITIAL_STATE } from '../../redux/reducers/user';
import { setCurrentUser } from '../../redux/actions/user';

describe('User reducer', () => {
    it('returns inital state when no state or action object is passed in', () => {
        expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    it('returns currentUser property value when SET_CURRENT_USER action is passed in(dispatched)', () => {
        expect(userReducer(INITIAL_STATE, setCurrentUser({userName: 'JohnDoe', name: 'John Doe', id: 1})))
        .toEqual({...INITIAL_STATE, currentUser: {userName: 'JohnDoe', name: 'John Doe', id: 1}});
    });
});