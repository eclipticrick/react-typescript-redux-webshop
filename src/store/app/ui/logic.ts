import {IReducerUi} from "./interface";
import {Layout} from "../../interfaces/Layout";

const FUNCTIONS = {
    setLayout: (state: IReducerUi, layout: Layout) => {
        return {
            ...state,
            layout
        }
    }
};

export default FUNCTIONS;
