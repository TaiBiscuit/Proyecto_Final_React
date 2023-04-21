import React from "react";
import icon from '../../images/shopping-cart.png';
import { useNavigate } from "react-router-dom";

export const CartButton = () => {

    const navigate = useNavigate();
    const handleNavigateCart = () => {
        navigate(`/cart`)
    }

    return(
        <>
        <button onClick={handleNavigateCart} className="cart-btn"><img className="cart-icon" src={icon} alt="cart icon" /></button>
        </>
    )
}

