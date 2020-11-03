import React from 'react';

const SingleProduct = ({singleProduct}) => {
    return (
        <div className="product">
            {singleProduct.name}
        </div>
    )
}

export default SingleProduct;