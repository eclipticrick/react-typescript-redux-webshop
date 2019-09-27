import reducerFunctions from "./logic";
import {APP_PREFIX} from "../index";
import {IReducerCart} from "./interface";
import {IAction} from "../../interfaces/redux";

/* Action types */
export const REDUCER_PREFIX = 'CART';
export const ACTION_TYPES = {
    ADD: `${APP_PREFIX}__${REDUCER_PREFIX}__ADD`,
    REMOVE: `${APP_PREFIX}__${REDUCER_PREFIX}__REMOVE`,
};

/* Reducer */
const initialState: IReducerCart = {
    items: []
};
const REDUCER = (state: IReducerCart = initialState, action: IAction): IReducerCart => {
    const {type, payload} = action;
    switch (type) {
        case ACTION_TYPES.ADD: return reducerFunctions.addToCart(state, payload);
        case ACTION_TYPES.REMOVE: return reducerFunctions.removeFromCart(state, payload);
        default: return state
    }
};
export default REDUCER;

/* Action creators */
export const addProductToCart = (productId: number) => ({type: ACTION_TYPES.ADD, payload: productId});
export const removeProductFromCart = (productId: number) => ({type: ACTION_TYPES.ADD, payload: productId});

