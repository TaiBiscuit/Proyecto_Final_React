import React from 'react';
import { useState, useEffect } from 'react';
import { GoToDetailsBtn } from '../index';
import { Loader } from '../index';
import {collection, getDocs, getFirestore} from 'firebase/firestore';


export const Products = () => {
  const [prod, setData] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const db = getFirestore();

      const itemsCollection = collection(db, "products");
      getDocs(itemsCollection)
      .then((products) => {
        if (products.size === 0) {
          console.log('No products');
        }

        setData(products.docs.map((doc) => ({id: doc.id, ...doc.data() })));
      }).catch((err) => console.log(err)).then(() => {
        setLoading(false);
      });
    }, []);


  return loading ? (
    <Loader />
    ) : (
       <>
    {
      prod.map((e) => 
          <div className="box" id={e.id}>
            <h1 className='title'>{e.title}</h1>
            <img src={e.image} alt="" className='card-img'/>
            <p className='price'>${e.price}</p>
            <GoToDetailsBtn product={e} />
          </div>  
      )
    }
      </> 
  )
}


