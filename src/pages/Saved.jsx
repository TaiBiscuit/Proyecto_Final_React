import React, { useContext } from 'react';
import {Button} from '../components/index';
import { SavedContext } from '../context';


export const Saved = () => {



    const {savedItems} = useContext(SavedContext);
    
    return (

        <div className='productos'>
            <div className="box">
                <p>{savedItems}</p>
                <Button />
            </div> 
        </div>
    )
}