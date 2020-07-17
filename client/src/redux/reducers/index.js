import { combineReducers } from 'redux';
import userReducer from './user';
import cartReducer from './cart';
import directoryReducer from './directory';
import shopReducer from './shop';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['cart']
};

const cartPersistConfig = {
    key: 'cart',
    storage,
    blacklist: ['hidden']
};

const rootReducer =  combineReducers({
    user: userReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    directory: directoryReducer,
    shop: shopReducer
});

// Persisted root reducer.
export default persistReducer(rootPersistConfig, rootReducer);