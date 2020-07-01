import shop from '../../redux/reducers/shop';
import shopReducer, { INITIAL_STATE } from '../../redux/reducers/shop';
import * as shopActions from '../../redux/actions/shop';

describe('Shop reducer', () => {
    it('returns inital state when no state or action object is passed in', () => {
        expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    it('handles FETCH_COLLECTIONS_START action', () => {
        expect(shopReducer(INITIAL_STATE, shopActions.fetchCollectionsStart())).toEqual({...INITIAL_STATE, isLoading: true});
    });
    it('handles FETCH_COLLECTIONS_SUCCESS action', () => {
        expect(shopReducer(INITIAL_STATE, shopActions.fetchCollectionsSuccess({routeName: 'hats', id: 1, title: 'Hats', items: [1, 2]})))
        .toEqual({
            ...INITIAL_STATE, 
            isLoading: false,
            collections: {routeName: 'hats', id: 1, title: 'Hats', items: [1, 2]}
        });
    });
    it('handles FETCH_COLLECTIONS_FAIL action', () => {
        expect(shopReducer(INITIAL_STATE, shopActions.fetchCollectionsFail('error'))).toEqual({
            ...INITIAL_STATE, 
            isLoading: false,
            errorMessage: 'error'
        });
    });
})