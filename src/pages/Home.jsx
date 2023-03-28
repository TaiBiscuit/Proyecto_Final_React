import React from 'react';
import { ItemListContainer, Products } from '../components';

export const Home = () => {
    return (
        <div><ItemListContainer  greetings='Hello! Welcome to ' subtitle='Just Buy It!'/>

        <div className="item-container">
            <div className="cards-container">
            <Products />
            </div>
        </div>
        </div>
        
    )

}