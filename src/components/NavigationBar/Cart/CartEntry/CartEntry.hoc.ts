import CartEntryComponent from './CartEntry.component';
import {connect, MapDispatchToPropsParam} from "react-redux";
import {addProductToCart, removeProductFromCart} from "../../../../store/app/cart";

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, any>) => ({
    addToCart: (id: number) => dispatch(addProductToCart(id)),
    removeFromCart: (id: number) => dispatch(removeProductFromCart(id))
});

export default connect(null, mapDispatchToProps)(CartEntryComponent)
