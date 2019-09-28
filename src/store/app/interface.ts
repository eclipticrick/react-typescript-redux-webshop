import {IReducerStore} from "./store/interface";
import {IReducerCart} from "./cart/interface";
import {IReducerUi} from "./ui/interface";

export interface IStore {
    store: IReducerStore,
    cart: IReducerCart,
    ui: IReducerUi
}
