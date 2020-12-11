import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import {Layout, LayoutCrud} from '../LayoutFinanzas';

const HEADER = ['Rut Cliente','Nombre del cliente',  'Cantidad de reservas'];
const ReporteReserva =() =>{
    //Constantes Tablas
    const[reservas, setReservas]=useState([]);
    const[loading, setLoading]=useState([]);
    
  //Constantes Graficos  
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
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min: 0,
                    
                }
              }]
           }
        
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
        apiSetStateFromUrl("/api/reservas/reportereservas", setReservas, setLoading);
        
        document.title = 'Finanzas | Reporte Reservas';

      
        
    },[])
    return(
    <Layout>
        <LayoutCrud>
        {!loading ? <CrudTable items={reservas} setItems={setReservas} header={HEADER} title="Reservas por clientes del último mes"  url="/api/reservas/reportereservas" nameId="nombrePerson" apiSetStateFromUrl={apiSetStateFromUrl} eliminar={false} agregar={false} editar={false} /> : <CustomSpinner />}
        </LayoutCrud>
      <div className= "ReporteReservas" style={{width: "80%", height: "90%"}}>
          <h2>Reserva por rut</h2>
          <Bar data={data} options={opciones}></Bar>

      </div>
</Layout>
);
}
export default ReporteReserva;