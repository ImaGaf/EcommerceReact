import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const NavBar = ({ Logo }) => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const LogOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }
    return (
        <div className='nav-bar'>
            <>
                <Offcanvas placement='end' show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                            <Cart/>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
            <div className='nav-logo'>
                <img onClick={() => navigate("/")} src={Logo} alt="" />
            </div>
            <button onClick={() => navigate("/Login")} className='nav-link'><i className='bx bx-user'></i></button>
            <button onClick={() => navigate("/purchases")} className='nav-link'><i className='bx bx-box'></i></button>
            <button className='nav-link' variant="primary" onClick={handleShow}><i className='bx bxs-cart'></i></button>
            <button className='nav-link' onClick={LogOut}>Log Out</button>
        </div>
    );
};

export default NavBar;