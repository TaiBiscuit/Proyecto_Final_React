import React, { useContext } from 'react';
import {Button} from '../components/index';
import { collection, getDoc, doc, addDoc, getFirestore} from "firebase/firestore";
import {useState, useEffect} from 'react';
import { SavedContext } from '../context';


export const Saved = () => {
    const {savedItems} = useContext(SavedContext);
    

    const fetchById = async (id) => {
        const db = getFirestore();
        const ref = id.map((id) => doc(collection(db, "products"), id));
        const productsSnap = await Promise.all(
            ref.map((ref) => getDoc(ref))
        );
    
        const products = productsSnap.map((productsSnap) => {
        if(productsSnap.exists()) {
            return {id: productsSnap.id, ...productsSnap.data()};
        } else {
            return null;
        }
        });
    
        return products.filter((product) => product !== null);
    };
    
    return (

        <div className='productos'>
            <div className="box">
                <p>{savedItems}</p>
                <Button />
            </div> 
        </div>
    )
}