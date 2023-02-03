import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Cart = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        
    },[])

    return (
        <div className='cart-container'>
            <div className='cart-brand'>
                <span>Apple</span>
                <i className='bx bx-trash'></i>
            </div>
            <div className='cart-product'>
                <p>2021 Apple Mac</p>
                <span>1</span>
            </div>
            <p className='cart-product-price'> <span>Total:</span> $ 1500</p>
            <div className='price'>
                <p>Total</p>
                <span>$1500</span>
            </div>
            <button>Checkout</button>
        </div>
    );
};

export default Cart;