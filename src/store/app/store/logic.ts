import {IReducerStore} from "./interface";

const FUNCTIONS = {
    fetchProductsPending: (state: IReducerStore) => {
        return state
    },
    fetchProductsSuccess: (state: IReducerStore, payload: any) => {
        return state
    },
    fetchProductsFailure: (state: IReducerStore, payload: any) => {
        return state
    }
};

export const helpers = {
    fetchProducts: (): Promise<any> => {
        return fetch('https://server.ecliptic.nl/api/fakedata/products').then(res => res.json())
    }
};

export default FUNCTIONS;
