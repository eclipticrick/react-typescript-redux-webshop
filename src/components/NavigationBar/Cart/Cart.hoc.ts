import CartComponent from './Cart.component';
import {connect} from "react-redux";
import {IStore} from "../../../store/app/interface";

const mapStateToProps = (state: IStore) => ({
    products: state.store.products,
    items: state.cart.items
});

export default connect(mapStateToProps)(CartComponent)
