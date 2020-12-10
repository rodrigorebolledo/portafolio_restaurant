import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import Layout from '../LayoutFinanzas';

const ReporteIngresos =() =>{
    return(
    <Layout>
        <h1>Ingresos del último mes</h1>
        <br></br>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Ingresos</th>
      <th>Descripción</th>
      <th>Fecha</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Otto</td>
      
    </tr>
    
  </tbody>
</Table>
</Layout>
)
}
export default ReporteIngresos;