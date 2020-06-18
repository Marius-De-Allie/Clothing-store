import { createStore, applyMiddleware } from 'redux';
import{ persistStore } from 'redux-persist';
import reducer from './reducers';
import logger from 'redux-logger';

// redux store.
const store = createStore(reducer, applyMiddleware(logger));

const persistor = persistStore(store);

export {store as default, persistor};