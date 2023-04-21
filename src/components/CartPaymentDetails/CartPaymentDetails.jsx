import React from "react";

export const CartPaymentDetails = ({total, onClick}) => {

    return(
        <>
            <span className="payment-total">Total to pay: ${total}</span>
            <button className="to-checkout-btn" onClick={onClick}>Continue</button>
        </>
    )
}