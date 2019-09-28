import LayoutSwitchComponent from './LayoutSwitch.component';
import {connect, MapDispatchToPropsParam} from "react-redux";
import {setLayout} from "../../../../store/app/ui";
import {Layout} from "../../../../store/interfaces/Layout";
import {IStore} from "../../../../store/app/interface";

const mapStateToProps = (state: IStore) => ({
    layout: state.ui.layout
});
const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, any>) => ({
    setLayout: (layout: Layout) => dispatch(setLayout(layout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutSwitchComponent)
