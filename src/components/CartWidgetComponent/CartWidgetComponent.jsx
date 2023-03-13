import React from 'react';
import icon from '../../images/shopping-cart.png';


export const CartWidgetComponent = () => {
    return (
        <div className="cart-widget-div">
        <img className="cart-icon" src={icon} alt="cart icon" />
        <span className='bubble-icon'>1</span>
        </div>

    );
}

