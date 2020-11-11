import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"


export default ({ categories }) => {
  // console.log("estas son las props: ", categories)
  return (
    <div>
      <Container>
        <Row>
          {categories ? categories.map(category => {
            return (
              <Col xs={6} md={3}>
                <Link to={`/categories/${category.name}`}>
                  <Image src={category.image} fluid roundedCircle />
                  <h3 className="linkCategories">{category.name}</h3>
                </Link>
              </Col>
            )
          })
        : null}
        </Row>
      </Container>
    </div>
  )
};

