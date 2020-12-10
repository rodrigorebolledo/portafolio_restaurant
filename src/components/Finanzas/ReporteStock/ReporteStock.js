import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import Layout from '../LayoutFinanzas';
import Datatable from './Datatable';

require("es6-promise").polyfill()
require("isomorphic-fetch");


const ReporteStock =() =>{
  const [data, setData]=useState([]);
  const [nombreProducto, setNombreProducto]= useState('');
  const [stockProducto, setStockProducto]=useState(1);

useEffect(()=>{
  fetch("http://localhost:80/api/reservas/reportereservas")
  .then((response) => response.json())
  .then((json => setData(json)));
  console.log(data);
}, [])

    return(
    <Layout>
        <div>
          <div>filtro</div>
          <div>
            <Datatable data={data} />
          </div>
        </div>
</Layout>
)
}
export default ReporteStock;

