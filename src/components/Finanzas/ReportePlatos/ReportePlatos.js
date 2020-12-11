import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {Layout, LayoutCrud} from '../LayoutFinanzas';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';


const HEADER = ['Nombre del plato', 'Cantidad vendida'];
const ReportePlatos =() =>{
    //Constante tabla
    const[platos, setPlatos]=useState([]);
    const[loading, setLoading]=useState([]);
    //Constante Graficos
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
        apiSetStateFromUrl("/api/platos/reporteplatos", setPlatos, setLoading);
        peticionesApi();
        document.title = 'Finanzas | Reportes Platos';
        
    },[])
    return(
    <Layout>
        <LayoutCrud>
        {!loading ? <CrudTable items={platos} setItems={setPlatos} header={HEADER} title="Cantidad de platos vendidos del último mes"  url="/api/platos/reporteplatos" nameId="nombrePlato" apiSetStateFromUrl={apiSetStateFromUrl} eliminar={false} agregar={false} editar={false} /> : <CustomSpinner />}
        </LayoutCrud>
      <div className= "ReportePlatos" style={{width: "90%", height: "90%"}}>
          <h2>Cantidad de Platos vendidos</h2>
          <Bar data={data} options={opciones}></Bar>

      </div>
</Layout>
);
}
export default ReportePlatos;
