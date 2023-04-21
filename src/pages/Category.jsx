import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GoToDetailsBtn, Loader } from '../components';
import {collection, getDocs, getFirestore} from 'firebase/firestore';


export const Category = () => {
  const { categoryID } = useParams();
  const [loading, setLoading] = useState(true);
  const [prod, setData] = useState([]);  

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

  let productFiltered = [];
  
  for(let i=0; i< prod.length; i++) {
    if(prod[i].category === categoryID){
        productFiltered.push(prod[i])
    }
} 

  return loading ? <Loader /> : (
      <>
      <div className="cards-container">
      {
          productFiltered.map((e) => 
              <div className="box">
                <h1 className='title'>{e.title}</h1>
                <img src={e.image} alt="" className='card-img'/>
                <p className='price'>${e.price}</p>
                <GoToDetailsBtn product={e} />
              </div>
          )
        }
        </div>
      </> 
      )
}