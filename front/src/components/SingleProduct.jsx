import React from "react";

const SingleProduct = ({ singleProduct, addToCart }) => {
  console.log("SINGLEPRODUCT", singleProduct);
  return (
    <div>
      <div className="container">
        <div className="images">
          <div className="row">
            {singleProduct && singleProduct.pictures
              ? singleProduct.pictures.map((img) => (
                  <div key={img} className="imgContainer">
                    <img src={img} alt="img" />
                  </div>
                ))
              : null}
          </div>
          {singleProduct && singleProduct.pictures ? (
            <div className="principal">
              <img src={singleProduct.pictures[0]} alt="img" />
            </div>
          ) : null}
        </div>
        <div className="data">
          <h1>{singleProduct.name}</h1>
          <h4>{singleProduct.brand}</h4>
          <h4>$ {singleProduct.price}</h4>
          <button onClick={()=> {addToCart()}} style={{border:"1px solid white"}}>Add to cart</button>
        </div>
      </div>

      <hr />

      <div className="description">
        <h1>Description</h1>
        <p>{singleProduct.description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;

{
  /* <img
  src="shopping-cart.png"
  alt="add to cart"
  width="45px"
  height="50px"
></img> */
}
