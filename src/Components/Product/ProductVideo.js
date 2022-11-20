import React from 'react';
import product from '../../assets/videos/Product Page Sm.mp4'

const ProductVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={product} type="video/mp4" />
                </video>
        </>
    );
};

export default ProductVideo;