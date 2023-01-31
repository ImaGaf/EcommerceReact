import React from 'react';

const NavBar = ({Logo}) => {
    return (
        <div className='nav-bar'>
            <div className='nav-logo'>
                <img src={Logo} alt="" />
            </div>
            <button className='nav-link'><i className='bx bx-user'></i></button>
            <button className='nav-link'><i className='bx bx-box'></i></button>
            <button className='nav-link'><i className='bx bxs-cart'></i></button>
        </div>
    );
};

export default NavBar;