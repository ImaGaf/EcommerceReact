import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductList = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [])


    return (
        <div className='product-list'>
            <div className='look-for'>
                <input type="text" placeholder='What are you looking for?'/>
                <button><i className='bx bx-search'></i></button>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map((product) => (
                        <Col key={product.id}>
                            <Card className='card' key={product.id} >
                                <div className='image-container'>
                                    <Card.Img className='image' variant="top" src={product.images[0].url} />
                                </div>
                                <Card.Body >
                                    <Card.Text className='info'><strong>{product.brand}</strong><br />{product.title}</Card.Text>
                                    <Card.Text className='info'><strong>Price</strong><br />$ {product.price}</Card.Text>
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