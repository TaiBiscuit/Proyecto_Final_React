import React from 'react';
import {Button} from '../components/index';
import { Loader } from '../components/index';


export const Saved = () => {
    const [loading, setLoading] = React.useState(true);
    const [productData, setProductData] = React.useState({});

    const { state } = this.props.location;
    
    return loading ? <Loader /> : (

        <div className='productos'>
        <div className="box">
            <h1 className='title'>{productData.title}</h1>
            <img src={productData.image} alt="" className='card-img'/>
            <p className='price'>${productData.price}</p>
            <Button />
          </div>
        </div>
    )
}