import React from 'react';
import {Card,Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';


const SingleProduct = ({singleProduct}) => {
    return (
        <Container style={{marginTop:"10px", maxWidth:"90%", display:"flex", justifyContent:"center"}}>
            <Row>
                <Col xs={3} className="mb-4" key={singleProduct._id}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{singleProduct.name}</Card.Title>
                    <Card.Text>{singleProduct.brand}</Card.Text>
                    <Card.Text>{singleProduct.description}</Card.Text>
                    <Card.Text>{singleProduct.price}</Card.Text>
                    <Link to="/purchase"><img src="shopping-cart.png" alt="add to cart" width="45px" height="50px"></img></Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
            )
}

export default SingleProduct;