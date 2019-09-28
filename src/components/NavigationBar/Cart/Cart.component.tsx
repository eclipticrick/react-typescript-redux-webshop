import React, {useState} from 'react';
import './Cart.scss';
import cartWhiteIcon from '../../../assets/white/cart.svg'
import classNames from "classnames";
import {IProduct} from "../../../store/interfaces/Product";
import {ICartEntry} from "../../../store/interfaces/CartEntry";
import CartEntryComponent from "./CartEntry";
import ButtonComponent from "../../Button/Button.component";

const CartComponent: React.FC<{
    products: IProduct[],
    items: ICartEntry[],
}> = ({ products, items }) => {
    const [isOpen, setOpen] = useState(false);
    const itemCount = items.reduce((acc, item) => acc + item.amount, 0);
    return (
        <div className='CartComponent'>
            <div className='cart' onClick={() => setOpen(!isOpen)}>
                <img src={cartWhiteIcon} alt='' height={24}/>
                <div className='badge' key={itemCount}>
                    {itemCount}
                </div>
            </div>
            <div className={classNames('cartDropdown', { 'open': isOpen })} onMouseLeave={() => setOpen(false)}>
                {!items.length ? <div className='noItems'>There are no items in your cart</div> : (
                    <div className='cartContainer'>
                        <div className='main'>
                            {items
                                .map(entry => ({entry, product: products.find(product => product.id === entry.productId) as IProduct}))
                                .map(({entry, product}) => (
                                    <CartEntryComponent key={`cart-entry-list${product.id}`} product={product} entry={entry}/>
                                ))}
                        </div>
                        <div className='footer'>
                            <div className='total'>
                                total: $ {items.reduce((acc, item) => (+products.find(product => product.id === item.productId)!.price * item.amount) + acc, 0)}
                            </div>
                            <ButtonComponent>Checkout</ButtonComponent>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default CartComponent;
