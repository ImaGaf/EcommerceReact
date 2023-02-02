import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import Filter from './Filter';
import NavBar from './NavBar';
import ProductList from './ProductList';

const Home = () => {

    const dispatch = useDispatch()

    return (
        <div className='entire-home-page'>
            <div className='home-page' >
                <Filter />
                <ProductList />
            </div>
        </div>
    );
};

export default Home;