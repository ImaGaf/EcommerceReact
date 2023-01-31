import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Filter = () => {
    return (
        <div className='filter'>
            <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body className='filter-body'>
                        <div className='filter-price'>
                            <span>From</span>
                            <input type="number" />
                        </div>
                        <div className='filter-price'>
                            <span>to</span>
                            <input type="number" />
                        </div>
                        <button className='filter-button'>Filter Price</button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body>
                        <a href="">Stoves</a><br />
                        <a href="">Smart TV's</a><br />
                        <a href="">Smartphones</a><br />
                        <a href="">Computers</a><br />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Filter;