import React, { useEffect, useState } from 'react';

const Carrousel = ({ product, url, setUrl }) => {
    
    const compare = []
    product?.images.map( image=> {
        compare.push(image.url)
    })
    

    const previus =()=>{
        let index = compare.lastIndexOf(url)
        if(index == 0){
            index = 3;
            setUrl(`${product.images[index-1]?.url}`)
        }else{
            setUrl(`${product.images[index-1]?.url}`)
        }
    }

    const next =()=>{
        let index = compare.lastIndexOf(url)
        if(index == 2){
            index = -1;
            setUrl(`${product.images[index+1]?.url}`)
        }else{
            setUrl(`${product.images[index+1]?.url}`)
        }
    }

    return (
        <div className='carrousel'>
            <div className='image-big'>
                <button onClick={previus} className='next'><i className='bx bx-chevron-left'></i></button>
                <div className='img-container'>
                    <img src={url} alt="" />
                </div>
                <button  onClick={next} className='previus'><i className='bx bx-chevron-right'></i></button>
            </div>
            <div className='image-min'>
                {product?.images.map(image => (
                    <img onClick={() => setUrl(image.url)} key={image.id} src={image.url} alt="" />
                ))
                }
            </div>
        </div>
    );
};

export default Carrousel;