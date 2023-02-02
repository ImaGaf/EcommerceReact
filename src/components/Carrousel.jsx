import React, { useEffect, useState } from 'react';

const Carrousel = ({ product }) => {

    const [url, setUrl] = useState(``)
    const compare = []

    product?.images.map( image=> {
        compare.push(image.url)
    })
    

    const next =()=>{
        let index = compare.lastIndexOf(url)
        
        if(index == -1){
            setUrl(`${product.images[index+4]?.url}`)
            console.log(index)
        }else{
            setUrl(`${product.images[index-1]?.url}`)
            console.log(index)
        }
    }

    return (
        <div className='carrousel'>
            <div className='image-big'>
                <button onClick={next} className='next'><i className='bx bx-chevron-left'></i></button>
                <div className='img-container'>
                    <img src={url} alt="" />
                </div>
                <button className='previus'><i className='bx bx-chevron-right'></i></button>
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