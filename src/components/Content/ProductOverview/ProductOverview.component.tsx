import React from 'react';
import './ProductOverview.scss';
import ProductComponent from "./Product";
import {IProduct} from "../../../store/interfaces/Product";
import {Layout} from "../../../store/interfaces/Layout";
import classNames from 'classnames';
import {SortDirection} from "../../../store/interfaces/SortDirection";

const ProductOverviewComponent: React.FC<{products: IProduct[], layout: Layout, sort: SortDirection}> = ({products, layout, sort}) => {
    const list = [...products].sort((a, b) => {
        switch (sort) {
            case SortDirection.RELEVANCE:
                return 0;
            case SortDirection.PRICE_ASC:
                if (+a.price < +b.price) return -1;
                else if (+a.price > +b.price) return 1;
                return 0;
            case SortDirection.PRICE_DEC:
                if (+a.price > +b.price) return -1;
                else if (+a.price < +b.price) return 1;
                return 0;
            case SortDirection.ALPHABETICAL_AZ:
                if (a.name < b.name) return -1;
                else if (a.name > b.name) return 1;
                return 0;
            case SortDirection.ALPHABETICAL_ZA:
                if (a.name > b.name) return -1;
                else if (a.name < b.name) return 1;
                return 0;
            default:
                return 0
        }
    });
    return (
        <div className={classNames('ProductOverviewComponent', { 'rows': layout === Layout.ROWS })}>
            {list.map(product => <ProductComponent key={`product-overview-${product.id}`} product={product}/>)}
        </div>
    )
};

export default ProductOverviewComponent;
