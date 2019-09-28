import React from 'react';
import './TopBar.scss';
import SortingDropdown from "./SortingDropdown";
import LayoutSwitchComponent from "./LayoutSwitch";

const TopBarComponent: React.FC = () => (
    <div className='TopBarComponent elevation-1'>
        <LayoutSwitchComponent/>
        <SortingDropdown/>
    </div>
);

export default TopBarComponent;
