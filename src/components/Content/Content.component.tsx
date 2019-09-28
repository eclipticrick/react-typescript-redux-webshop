import React from 'react';
import './Content.scss';
import TopBarComponent from "./TopBar";
import ProductOverviewComponent from "./ProductOverview";
import FilterComponent from "./Filter";

const ContentComponent: React.FC = () => (
    <div className='ContentComponent container'>
        <TopBarComponent/>
        <div className='content'>
            <FilterComponent/>
            <ProductOverviewComponent/>
        </div>
    </div>
);

export default ContentComponent;
