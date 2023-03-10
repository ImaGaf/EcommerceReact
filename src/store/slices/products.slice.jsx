import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action)=>{
            const products = action.payload;
            return products
        }

    }
})



export const getProductsThunk = () => dispatch => {
    axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
    .then(res => dispatch(setProducts(res.data)))
}

export const getByBrandThunk = (searchBrand) => dispatch => {
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${searchBrand}`)
    .then(res => dispatch(setProducts(res.data)))
}

export const getByCategoryThunk = (searchBrand) => dispatch => {
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${searchBrand}`)
    .then(res => dispatch(setProducts(res.data)))
}

export const geCartThunk = () => dispatch =>{
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`)
    .then(res=> dispatch(setProducts(res.data)))
}

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;
