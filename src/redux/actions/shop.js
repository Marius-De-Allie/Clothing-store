const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS';

const updateCollections = collectionsMap => ({
    type: UPDATE_COLLECTIONS,
    collectionsMap
});

export {updateCollections, UPDATE_COLLECTIONS};