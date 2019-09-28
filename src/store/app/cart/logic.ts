import {IReducerCart} from "./interface";

const FUNCTIONS = {
    addToCart: (state: IReducerCart, productId: number) => {
        const newItems = [...state.items];
        const entry = newItems.find(e => e.productId === productId);
        let newEntry;
        if (entry) {
            newEntry = {...entry};
            newEntry.amount += 1;
            newItems[newItems.indexOf(entry)] = newEntry;
        } else {
            newEntry = { productId, amount: 1 };
            newItems.push(newEntry)
        }
        return {
            ...state,
            items: newItems
        }
    },
    removeFromCart: (state: IReducerCart, productId: number) => {
        const newItems = [...state.items];
        const entry = newItems.find(e => e.productId === productId);
        if (!entry) {
            return state
        } else if (entry.amount === 1) {
            newItems.splice(newItems.indexOf(entry), 1)
        } else {
            const newEntry = {...entry};
            newEntry.amount -= 1;
            newItems[newItems.indexOf(entry)] = newEntry;
        }
        return {
            ...state,
            items: newItems
        }
    }
};

export default FUNCTIONS;
