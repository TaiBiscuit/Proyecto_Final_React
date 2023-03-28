import React from 'react';
import { useParams } from 'react-router-dom';
import {Prod} from '../products';

export const Item = () => {
    const { productId } = useParams();
    const prodId = productId -1;
    const producto = Prod;

    return (

        <div className='productos'>
        <div className="box">
            <h1 className='title'>{producto[prodId].title}</h1>
            <img src={producto[prodId].image} alt="" className='card-img'/>
            <p className='price'>${producto[prodId].price}</p>
            <button className="add-btn">Add!</button>
          </div>
        </div>
    )
}