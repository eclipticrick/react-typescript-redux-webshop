import {IReducerStore} from "./interface";
import {IProduct} from "../../interfaces/Product";
import {SortDirection} from "../../interfaces/SortDirection";

const FUNCTIONS = {
    fetchProductsPending: (state: IReducerStore) => {
        return {
            ...state,
            loading: true,
            error: false
        }
    },
    fetchProductsSuccess: (state: IReducerStore, payload: IProduct[]) => {
        return {
            ...state,
            loading: false,
            products: payload
        }
    },
    fetchProductsFailure: (state: IReducerStore) => {
        return {
            ...state,
            loading: false,
            error: true
        }
    },
    sortProductList: (state: IReducerStore, payload: SortDirection) => {
        return {
            ...state,
            sort: payload
        }
    }
};

export const helpers = {
    fetchProducts: (): Promise<any> => {
        return fetch('https://server.ecliptic.nl/api/fakedata/products').then(res => res.json())
    }
};

export default FUNCTIONS;
