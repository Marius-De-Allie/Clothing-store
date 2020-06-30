import shop from '../../redux/reducers/shop';
import shopReducer, { INITIAL_STATE } from '../../redux/reducers/shop';
import * as shopActions from '../../redux/actions/shop';

describe('Shop reducer', () => {
    it('returns inital state when no state or action object is passed in', () => {
        expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    it('returns correct state isLoading property value when FETCH_COLLECTIONS_START action is passed in(dispatched)', () => {
        expect(shopReducer(INITIAL_STATE, shopActions.fetchCollectionsStart())).toEqual({...INITIAL_STATE, isLoading: true});
    });
    it('returns new collection and isLoading property value when FETCH_COLLECTIONS_SUCCESS action is passed in(dispatched)', () => {
        expect(shopReducer(INITIAL_STATE, shopActions.fetchCollectionsSuccess({routeName: 'hats', id: 1, title: 'Hats', items: [1, 2]})))
        .toEqual({
            ...INITIAL_STATE, 
            isLoading: false,
            collections: {routeName: 'hats', id: 1, title: 'Hats', items: [1, 2]}
        });
    });
    it('returns errorMessage property value and isLoading property value when FETCH_COLLECTIONS_FAIL action is passed in(dispatched)', () => {
        expect(shopReducer(INITIAL_STATE, shopActions.fetchCollectionsFail('error'))).toEqual({
            ...INITIAL_STATE, 
            isLoading: false,
            errorMessage: 'error'
        });
    });
})