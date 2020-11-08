import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <Container fluid className="productsContainer">
      <Row>
        {products.map((product) => {
          return (
            <Col xs={3} className="mb-4" key={product._id}>
              <Card className="mx-auto card">
                <div className="view view-eighth">
                  <img src={product.pictures[0]} />
                  <div className="mask">
                    <h2>{product.name}</h2>
                    <p>{product.brand}</p>
                    <Link to={`/products/${product._id}`} className="info">Read More</Link>
                  </div>
                </div>
                {/* <Card.Img
                  variant="top"
                  src={product.pictures[0]}
                  className="productImg"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.brand}</Card.Text>
                  <Card.Text>${product.price}</Card.Text>
                  <Link to={`/products/${product._id}`}>
                    <Button
                      variant="primary"
                      style={{ width: "100px", margin: "10px" }}
                    >
                      Mas info
                    </Button>
                  </Link>
                  <Link to="/purchase">
                    <img
                      src="shopping-cart.png"
                      alt="add to cart"
                      width="45px"
                      height="50px"
                    ></img>
                  </Link>
                </Card.Body> */}

              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
