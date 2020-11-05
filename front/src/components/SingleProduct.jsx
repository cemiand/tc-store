import React from 'react';
import {Card,Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';


const SingleProduct = ({singleProduct}) => {
    console.log("SINGLEPRODUCT", singleProduct)
    return (

        <Container style={{marginTop:"10px", maxWidth:"90%", display:"flex", justifyContent:"center"}}>
            <Row>
        <div>
            <img src={singleProduct.pictures} alt="img"/>
        </div>
            </Row>
            <Row>
                <div>
                <ul>
                    <li><Card.Title>{singleProduct.name}</Card.Title></li>
                    <li><Card.Text>{singleProduct.brand}</Card.Text></li>
                    <li><Card.Text>{singleProduct.description}</Card.Text></li>
                    <li><Card.Text>{singleProduct.price}</Card.Text></li>
                    <li><Link to="/purchase"><img src="shopping-cart.png" alt="add to cart" width="45px" height="50px"></img></Link></li>
                </ul>
                </div>
            </Row>
        </Container>
            )
}

export default SingleProduct;