import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, deleteProduct, resetCart }) => {
  return (
    <div>
      <h4 className="title">Shopping Cart</h4>
      <button onClick={resetCart}>Reset</button>
      <div className="shopping-cart">
        {cart
          ? cart.map((order) => (
              <div className="item" key={order._id}>
                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(order.product)}
                >
                  X
                </button>

                <Link to={`/products/${order.product._id}`} className="image">
                  <img src={order.product.pictures} alt="Imagen del producto" />
                </Link>

                <div className="description">
                  <span className="name">{order.product.name}</span>
                  <span className="brand">{order.product.brand}</span>
                </div>

                <div className="quantity">Cantidad: {order.quantity}</div>

                <div className="total-price">
                  {order.product.price * order.quantity}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Cart;
