import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { LayoutCrud, Layout } from '../LayoutFinanzas/Layout';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';

const HEADER = ['Nombre del proveedor','Cantidad de pedidos' ];
//DEFAULT
const ReporteProveedor = () => {

    const [pedido, setPedido] = useState([]);
    const [loading, setLoading] = useState([]);
    
    const[cantidadPedido, setCantidadPedido]=useState([]);
    const[nombreProveedor, setNombreProveedor]=useState([]);

    const data={
        labels: nombreProveedor,
        datasets:[{
            label:'Cantidad Pedido',
            backgroundColor:'rgb(255,0,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,0,0,0.2)',
            hoverBorderColor: '#FFFF00',
            data: cantidadPedido,

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
        await axios.get('http://localhost:80/api/proveedores/reporteproveedores')
        .then(response=>{
            var respuesta=response.data;
            var auxCantidad=[], auxProveedores=[];
            respuesta.map(elemento=>{
               auxCantidad.push(elemento.cantidadPedido);
               auxProveedores.push(elemento.nombreProveedor);
            });
            setCantidadPedido(auxCantidad);
            setNombreProveedor(auxProveedores);
        })
    }

    useEffect(() => {

        apiSetStateFromUrl("/api/proveedores/reporteproveedores", setPedido, setLoading);
        peticionesApi();
        

        document.title = 'Finanzas | Reportes Proveedores';
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={pedido} setItems={setPedido} header={HEADER} title="Cantidad de pedidos a Proveedores"  url="/api/proveedores/reporteproveedores" nameId="nombreProveedor" apiSetStateFromUrl={apiSetStateFromUrl}  eliminar={false} editar={false} agregar={false}  /> : <CustomSpinner />}
            </LayoutCrud>
            <div className= "ReportePlatos" style={{width: "90%", height: "90%"}}>
          <h2>Pedidos a proveedores del último mes</h2>
          <Bar data={data} options={opciones}></Bar>

      </div>
        </Layout>
    )
}

export default ReporteProveedor;