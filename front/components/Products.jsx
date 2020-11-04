import React from 'react';

const Products = ({products}) => {
    return (
        <div className="products">
            {products.map(product => (
                    <div className="products" key={product._id}>
                        <h1>{product.name}</h1>
                        <h2>{product.brand}</h2>
                        <h3>{product.price}</h3>
                        <p>{product.description}</p>
                        {/* AGREGAR LAS IMAGENES */}
                    </div>
            ))}
        </div>
    )
}

export default Products;