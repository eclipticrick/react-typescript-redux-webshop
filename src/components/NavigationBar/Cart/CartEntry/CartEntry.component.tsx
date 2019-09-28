import React from 'react';
import './CartEntry.scss';
import addWhiteIcon from '../../../../assets/white/add.svg'
import removeBlackIcon from '../../../../assets/black/remove.svg'
import removeWhiteIcon from '../../../../assets/white/remove.svg'
import {IProduct} from "../../../../store/interfaces/Product";
import {ICartEntry} from "../../../../store/interfaces/CartEntry";
import ButtonComponent, {ButtonType} from "../../../Button/Button.component";

const CartEntryComponent: React.FC<{
    product: IProduct,
    entry: ICartEntry,
    addToCart: (id: number) => void,
    removeFromCart: (id: number) => void
}> = ({ product, entry, addToCart, removeFromCart }) => {
    return (
        <div className='CartEntryComponent'>
            <div className='info'>
                <div className='title'>{product.name}</div>
                <div className='price'>$ {product.price}</div>
            </div>
            <div className='buttons'>
                <ButtonComponent type={entry.amount > 1 ? ButtonType.DEFAULT : ButtonType.DANGER} onClick={() => removeFromCart(product.id)}>
                    <img src={entry.amount > 1 ? removeBlackIcon : removeWhiteIcon} alt='remove'/>
                </ButtonComponent>
                <div className='amount'>{entry.amount}</div>
                <ButtonComponent onClick={() => addToCart(product.id)}>
                    <img src={addWhiteIcon} alt='add'/>
                </ButtonComponent>
            </div>
        </div>
    );
};

export default CartEntryComponent;
