import React from 'react';

const Products = ({products}) => {
    return (
        <div className="products">
            {products.map(product => (
                <div key={product.id}>
                    {product}
                </div>
            ))}
        </div>
    )
}

export default Products;