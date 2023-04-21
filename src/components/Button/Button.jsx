import React from "react";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext, SavedContext } from "../../context"; 

export const Button = () => {
    const [state, setState] = useState(1);
    const { productId } = useParams();
    const { itemCount, setItemCount } = useContext(CartContext);   
    const {savedItems, setSavedItems} = useContext(SavedContext)

    const handleLess = () => {
        setState(state - 1);
    }

    const addToCart = () => {
        const exist = itemCount.products.find((product) => product.productId === productId);
         if (exist) {
            exist.qtyItems += state;
        } else { 
        const newProduct = {
            productId,
            qty: state,
        };
        setItemCount((prevState) => ({
            qtyItems: prevState.qtyItems + state,
            products: [...prevState.products, newProduct],
        })); 
        }; 
    }

    const handleSave = () => {
        const savedProduct = productId;
        setSavedItems((prevState) => prevState + ', ' + savedProduct);
    }

    return(
        <>
        <button className="save-btn" onClick={handleSave}> Save </button>
        <button className="card-btn" onClick={handleLess}> Remove -</button>
        <button className="add-cart-btn" onClick={addToCart}>Add to cart</button>
        </>
    )
}