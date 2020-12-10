import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Layout from '../LayoutFinanzas';


const ReporteReserva =() =>{
    const[rutPerson, setRutPerson]=useState([]);
    const[cantidadReserva, setCantidadReserva]=useState([]);

    const data={
        labels:rutPerson ,
        datasets:[{
            label:'Cantidad',
            backgroundColor:'rgb(255,0,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,0,0,0.2)',
            hoverBorderColor: '#FFFF00',
            data: cantidadReserva,

        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: true
    }
    const peticionesApi=async()=>{
        await axios.get('http://localhost:80/api/reservas/reportereservas')
        .then(response=>{
            var respuesta=response.data;
            var auxCantidad=[], auxRut=[];
            respuesta.map(elemento=>{
               auxCantidad.push(elemento.cantidadReserva);
               auxRut.push(elemento.rutPerson);
            });
            setCantidadReserva(auxCantidad);
            setRutPerson(auxRut);
        })
    }

    useEffect(()=>{
        console.log(peticionesApi);
        peticionesApi();
        
    },[])
    return(
    <Layout>
      <div className= "ReporteReservas" style={{width: "100%", height: "500px"}}>
          <h2>Reserva por rut</h2>
          <Bar data={data} options={opciones}></Bar>

      </div>
</Layout>
);
}
export default ReporteReserva;