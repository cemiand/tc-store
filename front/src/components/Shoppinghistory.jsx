import React from "react";
import { Jumbotron, Table } from "react-bootstrap"

export default () => {
  return (
    <Jumbotron fluid>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Products</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>[guitarra,teclado,banyo]</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>[guitarra,teclado,banyo]</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">[guitarra,teclado,banyo]</td>
            <td>[guitarra,teclado,banyo]</td>

          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  )
}