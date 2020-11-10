import React, {useState} from "react"
import {Form, Row, Col, Button, Jumbotron, Tabs, Tab, Card} from "react-bootstrap"
import FormAccess from "./FormAccess"


export default ({users, handleChange, filterValue}) => {
    const [key, setKey] = useState('Users');

  return (
    <Jumbotron fluid > 
    <Tabs
id="controlled-tab-example"
activeKey={key}
onSelect={(k) => setKey(k)}
>
<Tab eventKey="Users" title="Users">
<FormAccess handleChange={handleChange} users={users} filterValue={filterValue}/>
</Tab>
<Tab eventKey="Products" title="Products">

</Tab>
<Tab eventKey="Categories" title="Categories">

</Tab>
<Tab eventKey="Orders" title="Orders">

</Tab>

</Tabs> 
</Jumbotron>

  );
    
}
