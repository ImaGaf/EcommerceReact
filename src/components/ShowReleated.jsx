import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getByCategoryThunk } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom';

const ShowReleated = ({}) => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();  
    const navigate = useNavigate();

    return (
        <div className='releated-products'>
            <h1 className= "releated-title">Discover Similar Items</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map((productItem) => (
                        <Col key={productItem.id}>
                            <Card  onClick={()=> navigate(`/Product/${productItem.id}`)} className='card' key={productItem.id} >
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

export default ShowReleated;