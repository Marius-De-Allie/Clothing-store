import { createStore, applyMiddleware } from 'redux';
import{ persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducers';
import logger from 'redux-logger';

// Array containing middleware
const middlewares = [thunk];

// If app is in dev mode add logger middlware to middlewares array.
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};

// redux store.
const store = createStore(reducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export {store as default, persistor};