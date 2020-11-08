import React from "react";
import { Alert } from "react-bootstrap";

const Cart = ({cartProducts}) => {
  return (
    <div>
      {cartProducts ? cartProducts.map(producto => {
        <ul>
            <li key={producto._id}> {producto.name} </li>
        </ul>
      })
        : 
        (<Alert variant="warning">
          <Alert.Heading>Error, product not found</Alert.Heading></Alert>)
     }
    </div>
  );
};

export default Cart;
