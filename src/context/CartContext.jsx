import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [itemCount, setItemCount] = useState({qtyItems: 0, products: []}); 

    return (
        <CartContext.Provider 
        value={{
            itemCount, 
            setItemCount, 
        }}
        >
        {children}
        </CartContext.Provider>
    );
};