import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storeReducer from './app/store';
// import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    store: storeReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(
    // applyMiddleware(...middleware)
));

export default store;
