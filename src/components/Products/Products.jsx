import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";




export const Products = () => {

  const [prod, setData] = useState([]);

  useEffect(() => {
    dataFetched();
  },[]) 

  const dataFetched = async() => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    setData(data);    
  }



  return prod === undefined ? (
    <div>Loading...</div>
    ) : (
       <>
    {
      prod.map((e) => 
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
    </> 
  )
}


