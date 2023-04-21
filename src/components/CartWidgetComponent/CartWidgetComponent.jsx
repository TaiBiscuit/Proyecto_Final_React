import React, { useContext } from 'react';
import { CartButton } from '../index';
import { CartContext } from '../../context';


export const CartWidgetComponent = () => {

    const {itemCount} = useContext(CartContext);

    return (
        <div className="cart-widget-div">
        <CartButton />
        <span className='bubble-icon'>{itemCount.qtyItems}</span>
        </div>

    );
}

