import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ categories }) => {
  return (
    <div>
      <Container>
        <h3 className="h2category">CATEGORIES</h3>
        <Row className="rowcategories">
          {categories
            ? categories.map((category) => {
              return (
                <Col className="catContainer" xs={6} md={3} key={category._id}>
                  <Link to={`/categories/${category.name}`}>
                    <Image className="imagesCat" src={category.image} fluid roundedCircle />
                    <h5 className="linkCategories">{category.name}</h5>
                  </Link>
                </Col>
              );
            })
            : null}
        </Row>
      </Container>
    </div>
  );
};
