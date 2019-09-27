import {IReducerStore} from "./store/interface";
import {IReducerCart} from "./cart/interface";

export interface IStore {
    store: IReducerStore,
    cart: IReducerCart,
    ui: IReducerStore
}
