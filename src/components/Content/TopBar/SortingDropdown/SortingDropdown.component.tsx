import React from 'react';
import './SortingDropdown.scss';
import {SortDirection} from "../../../../store/interfaces/SortDirection";

const SortingDropdownComponent: React.FC<{sortProductList: any}> = ({ sortProductList }) => (
    <div className='SortingDropdownComponent'>
        <select onChange={(event) => sortProductList(event.target.value)}>
            {/*{Object.keys(SortDirection).map((key: T) => <option value={SortDirection[key]}>{SortDirection[key]}</option>)}*/}
            <option value={SortDirection.RELEVANCE}>{SortDirection.RELEVANCE}</option>
            <option value={SortDirection.PRICE_DEC}>{SortDirection.PRICE_DEC}</option>
            <option value={SortDirection.PRICE_ASC}>{SortDirection.PRICE_ASC}</option>
            <option value={SortDirection.ALPHABETICAL_AZ}>{SortDirection.ALPHABETICAL_AZ}</option>
            <option value={SortDirection.ALPHABETICAL_ZA}>{SortDirection.ALPHABETICAL_ZA}</option>
        </select>
    </div>
);

export default SortingDropdownComponent;
