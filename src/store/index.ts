import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storeReducer from './app/store';
import cartReducer from './app/cart';
import uiReducer from './app/ui';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    store: storeReducer,
    cart: cartReducer,
    ui: uiReducer
});

const middleware = [
    thunk
];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;
