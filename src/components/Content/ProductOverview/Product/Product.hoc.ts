import ProductComponent from './Product.component';
import {connect, MapDispatchToPropsParam} from "react-redux";
import {addProductToCart} from "../../../../store/app/cart";
import {IStore} from "../../../../store/app/interface";

const mapStateToProps = (state: IStore) => ({
    layout: state.ui.layout
});
const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, any>) => ({
    addToCart: (id: number) => dispatch(addProductToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent)
