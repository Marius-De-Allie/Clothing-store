import directoryReducer, { INITIAL_STATE } from '../../redux/reducers/directory';

describe('Directory Reducer', () => {
    it('returns inital state when no state or action object is passed in', () => {
        expect.assertions(1);
        expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
    })
});