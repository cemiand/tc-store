import React from "react";

const Cart = ({ singleUser }) => {
  return (
    <div>
      <div className="shopping-cart">
        {/* <!-- Title --> */}
        <div className="title">Shopping Cart</div>
      </div>

      {singleUser.cart
        ? singleUser.cart.map((order) => {
            {
              /* <!-- orders --> */
            }
            <div className="item">
              <div className="buttons">
                <span className="delete-btn"></span>
              </div>

              <div className="image">
                <img
                  src={order.product.pictures[0]}
                  alt="Imagen del producto"
                />
              </div>

              <div className="description">
                <span>{order.product.name}</span>
                <span>{order.product.brand}</span>
              </div>

              <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                  <img src="plus.svg" alt="" />
                </button>
                <input type="text" name="name" value={order.quantity} />
                <button className="minus-btn" type="button" name="button">
                  <img src="minus.svg" alt="" />
                </button>
              </div>

              <div className="total-price">{order.product.price}</div>
            </div>;
          })
        : console.log("ACA NO HAY NINGUN PRODUCTO")}
    </div>
  );
};

export default Cart;
