import React from 'react';
import './Product.scss';
import {IProduct} from "../../../../store/interfaces/Product";
import {Layout} from "../../../../store/interfaces/Layout";
import addIconWhite from '../../../../assets/white/add.svg'
import ButtonComponent from "../../../Button/Button.component";

const ProductComponent: React.FC<{ product: IProduct, layout: Layout, addToCart: (id: number) => void }> = ({ product, layout, addToCart }) => (
    <div className='ProductComponent'>
        {layout === Layout.COLUMNS && (
            <div className="imageWrapper small">
                <img src={product.image} alt='product'/>
            </div>
        )}
        <div className='title'>{product.name}</div>
        {layout === Layout.ROWS && (
            <div className="imageWrapper">
                <img src={product.image} alt='product'/>
            </div>
        )}
        {layout === Layout.ROWS && <div className='description'>{product.description}</div>}
        <div className='info'>
            <span>$ {product.price}</span>
            <ButtonComponent onClick={() => addToCart(product.id)}>Add to cart <img className='ml' src={addIconWhite} alt='add'/></ButtonComponent>
        </div>
    </div>
);

export default ProductComponent;
