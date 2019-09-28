import ProductOverview from './ProductOverview.component';
import {connect} from "react-redux";
import {IStore} from "../../../store/app/interface";

const mapStateToProps = (state: IStore) => ({
    layout: state.ui.layout,
    products: state.store.products,
    sort: state.store.sort
});

export default connect(mapStateToProps)(ProductOverview)
