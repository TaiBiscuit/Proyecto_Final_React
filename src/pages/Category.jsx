import React from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";

import {Prod} from '../products';


export const Category = () => {
        const { categoryID } = useParams();
        const producto = Prod;
 
        let productFiltered = []
         for(let i=0; i< producto.length; i++) {
            if(producto[i].category === categoryID){
                productFiltered.push(producto[i])
            }
        } 
    
        return (
            <>
            <div className="cards-container">
            {
                productFiltered.map((e) => 
                    <Link to={`/products/${e.id}`}>
                    <div className="box">
                      <h1 className='title'>{e.title}</h1>
                      <img src={e.image} alt="" className='card-img'/>
                      <p className='price'>${e.price}</p>
                      <button className="add-btn">Add!</button>
                    </div>
                    </Link>
                )
              }
              </div>
              </> 
            )
}