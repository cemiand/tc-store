import React from 'react';
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap"
export default () => {
  return (
    <Jumbotron className="JumbotronFooter" Fluid>
      <h5>Tc-Store® & TC-Crew® are registred marks of TC-Crew Group made at Plataforma 5 by:</h5>
      <Container Fluid >
        <Row className="containerFooter">
          <Col xs={6} md={4}>
            <Image className="images" src="https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg" roundedCircle />
            <h6>Nahuel Bonader</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image className="images" src="https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg" roundedCircle />
            <h6>Emiliano Cantisani</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image className="images" src="https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg" roundedCircle />
            <h6>Alejandro Tartaglia</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image className="images" src="https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg" roundedCircle />
            <h6>Diego Garber</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image className="images" src="https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg" roundedCircle />
            Yherard Rojas
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}