import React from "react";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext, SavedContext } from "../../context"; 

export const Button = () => {
    const [state, setState] = useState(1);
    const { productId } = useParams();
     const { itemCount, setItemCount } = useContext(CartContext);   
     const {setSavedItems} = useContext(SavedContext);

    const handleLess = () => {
        const exist = itemCount.products.find((product) => product.productId === productId);
        if (exist.qty > 0){
            exist.qty--
        }
    }

    const addToCart = () => {
        const exist = itemCount.products.find((product) => product.productId === productId);
        console.log(exist)
         if (exist) {
            exist.qty += state;
            setState(state + 1);
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