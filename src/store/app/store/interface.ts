import {IProduct} from "../../interfaces/Product";
import {SortDirection} from "../../interfaces/SortDirection";

export interface IReducerStore {
    loading: boolean
    error: boolean
    products: IProduct[]
    sort: SortDirection
}
