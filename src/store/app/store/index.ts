import reducerFunctions, {helpers} from "./logic";
import {APP_PREFIX} from "../index";
import {IReducerStore} from "./interface";
import {IAction} from "../../interfaces/redux";

/* Action types */
export const REDUCER_PREFIX = 'STORE';
export const ACTION_TYPES = {
    FETCH_PRODUCTS_PENDING: `${APP_PREFIX}__${REDUCER_PREFIX}__FETCH_PRODUCTS_PENDING`,
    FETCH_PRODUCTS_SUCCESS: `${APP_PREFIX}__${REDUCER_PREFIX}__FETCH_PRODUCTS_SUCCESS`,
    FETCH_PRODUCTS_FAILURE: `${APP_PREFIX}__${REDUCER_PREFIX}__FETCH_PRODUCTS_FAILURE`
};

/* Reducer */
const initialState: IReducerStore = {
    products: []
};
const REDUCER = (state: IReducerStore = initialState, action: IAction): IReducerStore => {
    const {type, payload} = action;
    switch (type) {
        case ACTION_TYPES.FETCH_PRODUCTS_PENDING: return reducerFunctions.fetchProductsPending(state);
        case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS: return reducerFunctions.fetchProductsSuccess(state, payload);
        case ACTION_TYPES.FETCH_PRODUCTS_FAILURE: return reducerFunctions.fetchProductsFailure(state, payload);
        default:
            return state
    }
};
export default REDUCER;

/* Action creators */
export const fetchProducts = () => (dispatch: any) => {
    dispatch({type: ACTION_TYPES.FETCH_PRODUCTS_PENDING});
    return helpers.fetchProducts().then(
        data => dispatch({type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, data}),
        err => dispatch({type: ACTION_TYPES.FETCH_PRODUCTS_FAILURE, err})
    )
};

