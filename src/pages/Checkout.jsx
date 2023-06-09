import React from "react";
import Swal from "sweetalert2";

export const Checkout = () => {

    Swal.fire({
        title: 'Congrats!',
        text: 'You just bought it!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

    return(
        <>
        <div className="checkout-container">
            <div className="form-container">
            <form className="checkout-form">
                <div className="form-group" id='name'>
                <label>Name on card</label>
                <input type="text" placeholder="John Cena" />
                </div>

                <div className="form-group" id="num">
                <label>Card Number</label>
                <input type="text" maxLength={16} placeholder="1234 5678 9012 3456" required/>
                </div>

                <div className="form-group" id="expDate">
                    <label>Expiration Date</label>
                    <input type="month" required/>
                </div>

                <div className="form-group" id="secCode">
                    <label>Security Code</label>
                    <input className="scode" type="text" maxLength={3} placeholder="456" required />
                </div>
                <button type="submit" className="pay-now-btn">Pay now</button>
            </form>
        </div>
        </div>    
        </>
    )
}