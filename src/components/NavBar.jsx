import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({Logo}) => {

    const navigate = useNavigate();

    const LogOut = ()=>{
        localStorage.setItem("token","")
        navigate("/login")
    }

    return (
        <div className='nav-bar'>
            <div className='nav-logo'>
                <img onClick={ ()=> navigate("/")} src={Logo} alt="" />
            </div>
            <button onClick={ ()=> navigate("/Login")}  className='nav-link'><i className='bx bx-user'></i></button>
            <button onClick={ ()=> navigate("/purchases")} className='nav-link'><i className='bx bx-box'></i></button>
            <button className='nav-link'><i className='bx bxs-cart'></i></button>
            <button className='nav-link' onClick={LogOut}>Log Out</button>
        </div>
    );
};

export default NavBar;