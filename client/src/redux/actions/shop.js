import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
const FETCH_COLLECTIONS_FAIL = 'FETCH_COLLECTIONS_FAIL';

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    collectionsMap
});

export const fetchCollectionsFail = errorMessage => ({
    type: FETCH_COLLECTIONS_FAIL,
    errorMessage
});

// Async thunk action creator.
const fetchCollectionsAsync = () => {
    return async dispatch => {
        try {
            // Retrieve firebase collection reference.
            const collectionRef = firestore.collection('collections');
            // Dispatch FETCH-COLLECTIONS_START action.
            dispatch(fetchCollectionsStart());
            // Retrieve firebase collection snapshot.
            const snapShot = await collectionRef.get();
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            // Dispatch fetchCollectionsSuccess action to add collections to redux store.
            dispatch(fetchCollectionsSuccess(collectionsMap));
        } catch(error) {
            // Dispatch FETCH_COLLECTIONS_FAIL action.
            dispatch(fetchCollectionsFail(error.message));
        }
    }
};

export { fetchCollectionsAsync, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAIL };