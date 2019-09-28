import {connect, MapDispatchToPropsParam} from "react-redux";
import SortingDropdownComponent from "./SortingDropdown.component";
import {sortProductList} from "../../../../store/app/store";
import {SortDirection} from "../../../../store/interfaces/SortDirection";

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, any>) => ({
    sortProductList: (direction: SortDirection) => dispatch(sortProductList(direction)),
});

export default connect(null, mapDispatchToProps)(SortingDropdownComponent)
