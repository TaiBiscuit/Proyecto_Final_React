import React from "react";

export const CartDetails = ({product, qty}) => {

    return(
        <>
        <div className="cart-box">
            <div className="item-box">
                <img src={product.image} alt={product.name} className="cart-prod-img" />
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p>Price: ${product.price}</p>
                    <p>Amount: {qty.qty}</p>
                </div>
            </div>
        </div> 
        </>
    )
}