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
import FormProductSearch from "./FormProductSearch";
import { updateProduct } from "../store/actions/productAction";

export default ({
  users,
  handleChange,
  handleSubmitCat,
  filterValue,
  products,
  singleProduct,
  deleteProduct,
  categories,
}) => {
  function setProduct(e) {
    e.preventDefault();
    updateProduct(singleProduct);
  }
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
                    <h1 className="adminUserForm">CREATE A PRODUCT</h1>
                    <Form>
                      <FormProductsCreate />
                      <Button className="buttonsDiv" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Form>
                      <h1 className="adminUserForm">UPDATE A PRODUCT</h1>
                      <FormProductSearch
                        handleChange={handleChange}
                        products={products}
                        filterValue={filterValue}
                        singleProduct={singleProduct}
                      />
                      <FormProductsCreate singleProduct={singleProduct} />
                      <Button
                        className="buttonsDiv"
                        onClick={setProduct}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Form>
                      <h1 className="adminUserForm">DELETE A PRODUCT</h1>
                      <FormProductSearch handleChange={handleChange}
                        products={products}
                        filterValue={filterValue}
                        singleProduct={singleProduct} />
                      <FormProductsCreate singleProduct={singleProduct} />
                      <Button className="buttonsDiv" type="submit" onClick={deleteProduct}>
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
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
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Form>
                      <Form.Group >
                        <Form.Label><b>Name</b></Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" value={inputs.name} />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label><b>Pictures</b></Form.Label>
                        <Form.Control name="pictures" type="text" placeholder="Pictures" value={inputs.pictures} />
                      </Form.Group>
                      <Button className="buttonsDiv" type="submit" onClick={handleSubmitCat}>
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Categories</Form.Label>
                        <Form.Control as="select" onClick={(e) => { "aca iria un setOptions que tome el target value" }}>
                          {categories &&
                            categories.filter(category => category.name.includes(filterValue && filterValue.search)).map(category => {
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
        <Tab eventKey="Orders" title="Orders"></Tab>
      </Tabs>
    </Jumbotron>
  );
};
