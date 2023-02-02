import React from 'react';
import { useEffect, useState } from 'react';
import { Accordion, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Link } from 'react-router-dom';
import { getByBrandThunk, getByCategoryThunk } from '../store/slices/products.slice';

const Filter = () => {

    const product = useSelector(state => state.products)
    let filteredProduct = {}

    const dispatch = useDispatch();
    const [priceDown, setPriceDown] = useState("");
    const [priceUp, setPriceUp] = useState("");


    const filterByPrice = () =>{
        if( priceDown === priceUp === "" || (priceUp ==! '' && priceDown> priceUp)){
            alert("Ingrese rangos válidos")
        }else if(priceUp == ""){
            filteredProduct = product.filter( auxproduct=> auxproduct.price > priceDown)
            console.log(filteredProduct)
        }else if( priceDown == ""){
            filteredProduct = product.filter( auxproduct=> auxproduct.price < priceUp)
            console.log(filteredProduct)
        }
        else{
            filteredProduct = product.filter( auxproduct=> auxproduct.price > priceDown && auxproduct < priceUp)
        }
    }

    return (
        <div className='filter'>
            <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body className='filter-body'>
                        <div className='filter-price'>
                            <span>From</span>
                            <input value={priceDown} type="number" onChange={e=> setPriceDown(e.target.value)}  />
                        </div>
                        <div className='filter-price'>
                            <span>to</span>
                            <input value={priceUp} type="number" onChange={e=> setPriceUp(e.target.value)} />
                        </div>
                        <button onClick={ ()=> filterByPrice()}  className='filter-button'>Filter Price</button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li onClick={ ()=> dispatch(getByCategoryThunk(1))}>Stoves</li>

                            <li onClick={ ()=> dispatch(getByCategoryThunk(2))}>Smart TV's</li>

                            <li onClick={ ()=> dispatch(getByCategoryThunk(3))}>Smartphones</li>

                            <li onClick={ ()=> dispatch(getByCategoryThunk(4))}>Computers</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Filter;