import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import Layout from '../LayoutFinanzas';

const ReporteReserva =() =>{
    return(
    <Layout>
        <h1>Reporte reservas de clientes en el último mes</h1>
        <br></br>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre Cliente</th>
      <th>Cantidad de reservas</th>
      
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
export default ReporteReserva;