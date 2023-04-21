import React from "react";
import { useNavigate } from 'react-router-dom';

export const GoToDetailsBtn = ({product}) => {

    const navigate = useNavigate();

    const handleNavigateProduct = () => {
        console.log(`${product.id}`);
        navigate(`/products/${product.id}`)
    }

    return(
        <>
        <button className='card-btn' onClick={handleNavigateProduct}>Go to details</button>
        </>
    )

}