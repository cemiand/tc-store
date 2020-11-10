import React, {useState} from "react"
import {Row, Col, Button, Jumbotron, Tabs, Tab, Nav, Form} from "react-bootstrap"
import FormAccess from "./FormAccess"
import FormProductsCreate from "./FormProductsCreate";
import FormProductSearch from "./FormProductSearch";


export default ({users, handleChange, filterValue, products, singleProduct}) => {
  function setProduct (e){
    e.preventDefault()
    updateUser(singleProduct)
  } 
    const [key, setKey] = useState('Users');

  return (
    <Jumbotron fluid > 
    <Tabs
id="controlled-tab-example"
activeKey={key}
onSelect={(k) => setKey(k)}
>
<Tab eventKey="Users" title="Users">
<FormAccess handleChange={handleChange} users={users} filterValue={filterValue.email}/>
</Tab>
<Tab eventKey="Products" title="Products">
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav  className="flex-column">
        <Nav.Item>
          <Nav.Link variant="success"eventKey="first"><Button variant="outline-success">Create</Button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><Button variant="outline-info">Update</Button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"><Button variant="outline-warning">Delete</Button></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Form>
          <FormProductsCreate/>
          <Button type="submit">Submit</Button>
          </Form>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Form>
          <FormProductSearch handleChange={handleChange} products={products} filterValue={filterValue} singleProduct={singleProduct}/>
          <FormProductsCreate singleProduct={singleProduct}/>
          <Button onClick={setProduct} type="submit">Submit</Button>
          </Form>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <Form>
          <FormProductSearch/>
          <FormProductsCreate/>
          <Button type="submit">Submit</Button>
          </Form>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Tab>
<Tab eventKey="Categories" title="Categories">

</Tab>
<Tab eventKey="Orders" title="Orders">

</Tab>

</Tabs> 
</Jumbotron>

  );
    
}
