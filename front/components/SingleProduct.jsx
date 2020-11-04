import React from 'react';

const SingleProduct = ({singleProduct}) => {
    return (
        <div className="product">
            <h1>{singleProduct.name}</h1>
            <h2>{singleProduct.brand}</h2>
            <h3>{singleProduct.price}</h3>
            <p>{singleProduct.description}</p>
            {/* AGREGAR LAS IMAGENES */}
        </div>
    )
}

export default SingleProduct;