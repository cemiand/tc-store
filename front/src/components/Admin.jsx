import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Jumbotron,
  Tabs,
  Tab,
  Nav,
  Form,
} from "react-bootstrap";
import FormAccess from "./FormAccess";
import FormProductsCreate from "./FormProductsCreate";
import FormProductsDelete from "./FormProductsDelete";
import FormProductsUpdate from "./FormProductsUpdate";
import FormProductSearch from "./FormProductSearch";
import FormOrders from "./FormOrders"

export default ({
  users,
  handleChange,
  filterValue,
  products,
  singleProduct,
  singleUser,
  orders,
  singleOrder,
}) => {
  
  const [key, setKey] = useState("Users");

  return (
    
    <Jumbotron fluid>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Users" title="Users">
          <FormAccess
            handleChange={handleChange}
            users={users}
            filterValue={filterValue.email}
          />
        </Tab>
        <Tab eventKey="Products" title="Products">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="adminRow">
              <Col sm={3}>
                <Nav className="flex-column">
                  <Nav.Item>
                    <Nav.Link variant="success" eventKey="first">
                      <Button variant="outline-success">Create</Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Button variant="outline-info">Update</Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <Button variant="outline-warning">Delete</Button>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div>
                      <FormProductsCreate />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div>
                      <FormProductSearch
                        handleChange={handleChange}
                        products={products}
                        filterValue={filterValue}
                        singleProduct={singleProduct}
                      />
                      <FormProductsUpdate singleProduct={singleProduct} />
                     </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div>
                      <FormProductSearch handleChange={handleChange}
                        products={products}
                        filterValue={filterValue}
                        singleProduct={singleProduct}/>
                      <FormProductsDelete singleProduct={singleProduct}/>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
        <Tab eventKey="Categories" title="Categories">
          
        </Tab>
        <Tab eventKey="Orders" title="Orders">
          <div>
          <FormOrders filterValue={filterValue} handleChange={handleChange} singleOrder={singleOrder} orders={orders}/>
          </div>
        </Tab>
      </Tabs>
    </Jumbotron>
  );
};
