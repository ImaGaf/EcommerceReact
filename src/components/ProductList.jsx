import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getByBrandThunk, getByCategoryThunk, getProductsThunk } from '../store/slices/products.slice';

const ProductList = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchBrand,setSearchBrand]= useState('')

    useEffect(() => {
        dispatch(getProductsThunk());
    },[])

    const getByBrand = () => {
        if(searchBrand == "") {
            dispatch(getProductsThunk());
        }else{
            dispatch(getByBrandThunk(searchBrand))
        }
    }
    

    return (
        <div className='product-list'>
            <div className='look-for'>
                <input type="text" placeholder='What are you looking for?' value={searchBrand} onChange = {e => setSearchBrand(e.target.value)}/>
                <button onClick={ ()=> getByBrand()}><i className='bx bx-search'></i></button>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map((productItem) => (
                        <Col key={productItem.id}>
                            <Card  onClick={()=>navigate(`/Product/${productItem.id}`)} className='card' key={productItem.id} >
                                <div className='image-container'>
                                    <Card.Img className='image' variant="top" src={productItem.images[0].url} />
                                </div>
                                <Card.Body >
                                    <Card.Text className='info'><strong>{productItem.brand}</strong><br />{productItem.title}</Card.Text>
                                    <Card.Text className='info'><strong>Price</strong><br />$ {productItem.price}</Card.Text>
                                </Card.Body>
                                <button className='main-add'><i className='bx bx-cart'></i></button>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default ProductList;