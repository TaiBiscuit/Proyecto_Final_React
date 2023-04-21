import React, { useContext } from 'react';
import { CartDetails, CartPaymentDetails, Loader } from '../components';
import { collection, getDoc, doc, addDoc, getFirestore} from "firebase/firestore";
import { CartContext } from '../context';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

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


export const Cart = () => {
    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true);
    const {itemCount} = useContext(CartContext);

    useEffect(() => {
        const saveIds = itemCount.products.map((product) => product.productId);
        fetchById(saveIds)
        .then((res) => setProd(res))
        .catch((err) => console.log(err))
        .then(() => setLoading(false));
    }, [itemCount.products])

    const total = prod
        .map((product) => product.price)
        .reduce((accu, current) => accu + current, 0);
    const navigate = useNavigate();

    const handleCheckout = () => {
        const db = getFirestore();
        if( prod.length > 0 ){
            const orderObj = Object.assign({}, prod)
            const order = orderObj;
            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order)
            .then(docRef => {console.log('Document has been added succesfully')});
        } 
        navigate('/checkout', {state: total}); 
    };

    return loading ? <Loader /> : (
        <>
        <div className="payment-details">
            <div className="payment-details-box">
                <div className="payment-products-box">
                {prod.map((product) => (
                <CartDetails key={product.id} product={product} qty={itemCount.products.find((item) => item.productId === product.id)}/>
                ))}
                </div>
                <CartPaymentDetails total={total} onClick={handleCheckout}/>
            </div>
        </div>

        </>
    );
}