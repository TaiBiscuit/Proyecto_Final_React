import React from 'react';
import { useParams } from 'react-router-dom';
import {Button} from '../components/index';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { Loader } from '../components/index';


export const Item = () => {
    const { productId } = useParams();
    const [productData, setProductData] = React.useState({});
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, 'products', productId);
        getDoc(docRef)
        .then((product) => {
            if (!product.exists()) {
                console.log('Product does not exist')
            }
            setProductData({id: product.id, ...product.data()});
        })
        .catch((err) => console.log(err))
        .then(() => {setLoading(false)})
    }, [productId]);

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