import * as shopActions from '../../redux/actions/shop';

describe('Shop actions', () => {
    it('fetchCollectionsStart action creator returns correct action object', () => {
        const expectedAction = {
            type: shopActions.FETCH_COLLECTIONS_START
        };
        expect(shopActions.fetchCollectionsStart()).toEqual(expectedAction);
    });
    it('fetchCollectionsSuccess action creator returns correct action object', () => {
        const newCollection = {
            routeName: 'hats',
            id: 1,
            title: 'Hats',
            items: [1, 2, 3]
        };
        const expectedAction = {
            type: shopActions.FETCH_COLLECTIONS_SUCCESS,
            collectionsMap: newCollection
        };
        expect(shopActions.fetchCollectionsSuccess(newCollection)).toEqual(expectedAction);
    });
    it('fetchCollectionsFail action creator returns corect action object', () => {
        // const expectedAction = {
        //     type: shopActions.FETCH_COLLECTIONS_FAIL,
        //     errorMessage: 'Error fetching.'
        // };
        expect(shopActions.fetchCollectionsFail('Error fetching.')).toEqual({
            type: shopActions.FETCH_COLLECTIONS_FAIL,
            errorMessage: 'Error fetching.'
        })
    });
});

// Need to create test for async (thunk) action creator.