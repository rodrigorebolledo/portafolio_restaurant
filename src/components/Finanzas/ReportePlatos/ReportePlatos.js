import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Layout from '../LayoutFinanzas';


const ReportePlatos =() =>{
    const[cantidadPlato, setCantidadPlato]=useState([]);
    const[nombrePlato, setNombrePlato]=useState([]);

    const data={
        labels: nombrePlato,
        datasets:[{
            label:'Cantidad',
            backgroundColor:'rgb(255,0,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,0,0,0.2)',
            hoverBorderColor: '#FFFF00',
            data: cantidadPlato,

        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: true
    }
    const peticionesApi=async()=>{
        await axios.get('http://localhost:80/api/platos/reporteplatos')
        .then(response=>{
            var respuesta=response.data;
            var auxCantidad=[], auxPlatos=[];
            respuesta.map(elemento=>{
               auxCantidad.push(elemento.cantidadPlato);
               auxPlatos.push(elemento.nombrePlato);
            });
            setCantidadPlato(auxCantidad);
            setNombrePlato(auxPlatos);
        })
    }

    useEffect(()=>{
        console.log(peticionesApi);
        peticionesApi();
        
    },[])
    return(
    <Layout>
      <div className= "ReportePlatos" style={{width: "100%", height: "500px"}}>
          <h2>Cantidad de Platos vendidos</h2>
          <Bar data={data} options={opciones}></Bar>

      </div>
</Layout>
);
}
export default ReportePlatos;
