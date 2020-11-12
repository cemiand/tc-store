import React, { useState } from "react";
import { Row, Col, Button, Jumbotron, Tabs, Tab, Nav, Form, } from "react-bootstrap";
import FormAccess from "./FormAccess";
import FormProductsCreate from "./FormProductsCreate";
import FormProductsDelete from "./FormProductsDelete";
import FormProductsUpdate from "./FormProductsUpdate";
import FormProductSearch from "./FormProductSearch";
import FormOrders from "./FormOrders"

export default ({
  orders,
  singleOrder,
  handleOptions, setProduct,
  users,
  handleChange,
  handleSubmitCat,
  handleDeleteCat,
  filterValue,
  products,
  singleProduct,
  deleteProduct,
  categories, }) => {


  const [key, setKey] = useState("Users");

  return (

    <Jumbotron fluid>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}>
        {/* //------------PESTAÑA USER----------- */}
        <Tab eventKey="Users" title="Users">
          <FormAccess
            handleChange={handleChange}
            users={users}
            filterValue={filterValue.email}
          />
        </Tab>
        {/* //----------PESTAÑA PRODUCTS--------- */}
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
                      <FormProductsCreate categories={categories} handleOptions={handleOptions} />
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
                        singleProduct={singleProduct} />
                      <FormProductsDelete singleProduct={singleProduct} />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
        {/* //----------PESTAÑA CATEGORIES-------- */}
        <Tab eventKey="Categories" title="Categories">
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
                    <Nav.Link eventKey="third">
                      <Button variant="outline-warning">Delete</Button>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              {/*  //---------FUNCIONALIDADES DE CREATE Y DELETE---------------- */}
              <Col sm={9}>
                <Tab.Content>
                  {/* //-------------CREATE CATEGORY------------------------ */}
                  <Tab.Pane eventKey="first">
                    <Form>
                      <h1 className="adminUserForm">Create a category</h1>
                      <Form.Group >
                        <Form.Label><b>Name</b></Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" onChange={handleChange} value={filterValue.name} />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label><b>Pictures</b></Form.Label>
                        <Form.Control name="image" type="text" placeholder="Pictures" onChange={handleChange} value={filterValue.image} />
                      </Form.Group>
                      <Button className="buttonsDiv" type="submit" onClick={handleSubmitCat}>
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                  {/*  //------------DELETE CATEGORY------------------------ */}
                  <Tab.Pane eventKey="third">
                    <Form onSubmit={handleDeleteCat}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Categories</Form.Label>
                        <Form.Control as="select" onChange={handleOptions}>
                          {categories &&
                            categories.map(category => {
                              return (
                                <option key={category._id} value={category._id}>{category.name}</option>
                              )
                            })
                          }
                        </Form.Control>
                      </Form.Group>
                      <Button className="buttonsDiv" variant="warning" type="submit">
                        Delete
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>

        {/* //----------PESTAÑA ORDERS------------ */}
        <Tab eventKey="Orders" title="Orders">
          <div>
            <FormOrders filterValue={filterValue} handleChange={handleChange} singleOrder={singleOrder} orders={orders} />
          </div>
        </Tab>
      </Tabs>
    </Jumbotron>
  );
};
