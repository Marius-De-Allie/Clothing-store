import { combineReducers } from 'redux';
import userReducer from './user';
import cartReducer from './cart';
import directoryReducer from './directory';
import shopReducer from './shop';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

// Persisted root reducer.
export default persistReducer(persistConfig, rootReducer);