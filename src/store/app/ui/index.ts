import reducerFunctions from "./logic";
import {APP_PREFIX} from "../index";
import {IReducerUi} from "./interface";
import {IAction} from "../../interfaces/redux";
import {Layout} from "../../interfaces/Layout";

/* Action types */
export const REDUCER_PREFIX = 'UI';
export const ACTION_TYPES = {
    SET_LAYOUT: `${APP_PREFIX}__${REDUCER_PREFIX}__SET_LAYOUT`,
};

/* Reducer */
const initialState: IReducerUi = {
    layout: Layout.COLUMNS
};
const REDUCER = (state: IReducerUi = initialState, action: IAction): IReducerUi => {
    const {type, payload} = action;
    switch (type) {
        case ACTION_TYPES.SET_LAYOUT: return reducerFunctions.setLayout(state, payload);
        default: return state
    }
};
export default REDUCER;

/* Action creators */
export const setLayout = (layout: Layout) => ({type: ACTION_TYPES.SET_LAYOUT, payload: layout});
