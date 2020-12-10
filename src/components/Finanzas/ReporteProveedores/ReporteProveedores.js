import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import Layout from '../LayoutFinanzas';


const ReporteProveedores =() =>{
    return(
    <Layout>
        <h1>Reporte pedidos a proveedores del último mes</h1>
        <br></br>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre Proveedor</th>
      <th>Cantidad de pedidos</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    
  </tbody>
</Table>
</Layout>
)
}
export default ReporteProveedores;