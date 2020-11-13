import React from "react";

const SingleProduct = ({
  singleProduct,
  addToCart,
  sumProduct,
  restProduct,
  quantity,
}) => {
  return (
    <div>
      <div className="product-container">
        {singleProduct && singleProduct.pictures ? (
          <div className="images">
            <div className="list-images">
              {singleProduct.pictures.map((img) => (img && 
                <div key={img} className="imgContainer">
                  <img src={img} alt="img" />
                </div>
              ))}
            </div>
            <div className="principal-image">
              <img src={singleProduct.pictures[0]} alt="img" />
            </div>
          </div>
        ) : null}

        <div className="data-container">
          <div className="data">
            <h1>{singleProduct.name}</h1>
            <h4>{singleProduct.brand}</h4>
            <h4 className="price"> {singleProduct.price}</h4>
          </div>

          <div className="order">
            <div className="quantity">
              <button
                className="quantity-btn"
                type="button"
                onClick={restProduct}
              >
                -
              </button>
              <div> {quantity} </div>
              <button
                className="quantity-btn"
                type="button"
                onClick={sumProduct}
              >
                +
              </button>
            </div>
            <button className="add-btn" onClick={() => addToCart()}>
              Add to cart
            </button>
          </div>
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
