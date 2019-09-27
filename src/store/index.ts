import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storeReducer from './app/store';
import cartReducer from './app/cart';
import uiReducer from './app/ui';
// import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    store: storeReducer,
    cart: cartReducer,
    ui: uiReducer
});

export const store = createStore(rootReducer, composeWithDevTools(
    // applyMiddleware(...middleware)
));

export default store;
