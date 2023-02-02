import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carrousel from './Carrousel';
import { getByCategoryThunk, getProductsThunk } from '../store/slices/products.slice';
import ShowReleated from './ShowReleated';

const Product = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    const [Quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => setProduct(res.data))
            releatedProduct();
    }, [product])

    const releatedProduct = () => {
        dispatch(getByCategoryThunk(`${product?.category?.id}`));
    }

    return (
        <div className='show-product'>
            <div className = "single-product">
                <div className='carrousel-container'>
                    <h6>
                        <span onClick={() => navigate("/")} >Home</span>
                        <i className='bx bxs-circle'></i> {product?.title}
                    </h6>
                    <Carrousel product={product} />
                </div>
                <div className='product-info'>
                    <div className='main-info'>
                        <span>{product?.brand}</span>
                        <h3>{product?.title}</h3>
                        <p>{product?.description}</p>
                    </div>

                    <div className='info-button'>
                        <div className='quantity-container'>
                            <span>Price</span>
                            <span className='price'>$ {product?.price}</span>
                        </div>
                        <div className='quantity-container'>
                            <span>Quantity</span>
                            <div className='quantity'>
                                <button className='quantity-button' onClick={() => setQuantity(Quantity + 1)} >+</button>
                                <p className='quantity-number'>{Quantity}</p>
                                <button className='quantity-button' onClick={() => {
                                    if (Quantity > 1) {
                                        setQuantity(Quantity - 1)
                                    }
                                }}>-</button>
                            </div>
                        </div>
                    </div>
                    <button className='add-to'>Add to cart <i className='bx bx-cart'></i></button>
                </div>
            </div>
            <ShowReleated product={product} />
        </div>
    );
};

export default Product;