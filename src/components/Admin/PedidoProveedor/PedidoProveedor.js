import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Layout, LayoutCrud } from '../Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import { List } from '@material-ui/core';
const header = ['ID','Cantidad','Ingredientes','Nombre_Plato' ]



const PedidoProveedor = () => {
    const PROVEEDOR_ID = 1
    const [proveedor, setProveedor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idProveedor, setIdProveedor] = useState(PROVEEDOR_ID);
    const [idProvProd, setIdProvProd] = useState(5);
    const [nombreProdcuto, setNombreProducto] = useState(undefined);
    const [cantidad, setCantidad] = useState(1);
    const [apiUsuario, setApiUsuario] = useState([]);
    const [apiProducto, setApiProducto] = useState([]);
    const [proveProductos, setProveProductos] = useState([]);
    
    

    

    useEffect(() => {
        apiSetStateFromUrl("/api/proveedores", setProveedor, setLoading);
        apiSetStateFromUrl("/api/usuarios/", setApiUsuario);
        apiSetStateFromUrl("/api/productos/", setApiProducto);
        apiSetStateFromUrl("api/proveedorproductos/prov/", setProveProductos, undefined,PROVEEDOR_ID );
        document.title = 'Admin Pedidos';

        
    }, [])
    useEffect(()=>{
    if(proveProductos.length){
        apiSetStateFromUrl("api/proveedorproductos/prov/", setProveProductos, undefined, idProveedor);
    }else{
        return;
    }
    },[idProveedor]
    )

    
   

    return (
        <Layout>
            
            <Form>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Proveedor</Form.Label>
      <Form.Control as="select" value={idProveedor} onChange={(e)=>{
          setIdProveedor(e.target.value)
      }}>
         {
        proveedor.map((prov, index) => {
        return (<option key={index} value={prov.idProveedor}>{prov.nombreProveedor}</option>)
        })
        }
      </Form.Control>
    </Form.Group> 
    
  
</Form.Row>
 
    
<Form>
        <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Producto</Form.Label>
        <Form.Control as="select" value={idProvProd} onChange={(e)=>{
          setIdProvProd(e.target.value)
      }}>
          
         { 
         console.log(proveProductos) }
         {
        proveProductos.map((provprod, index) => {
        return (<option key={index} value={provprod.idProvProd}>{provprod.producto.nombreProducto}</option>)
        })
        }
        </Form.Control>
         </Form.Group>
    
        <Form.Group controlId="Cantidad">
        <Form.Label>Cantidad de Producto</Form.Label>
        <Form.Control placeholder="Ingrese cantidad a pedir" />
    </Form.Group>
     </Form>
     

  <Form.Row>
    
    
  </Form.Row>
  <Button variant="primary" type="submit">
    Agregar
  </Button>
  
  <Button variant="secondary" type="submit">
    Realizar Pedido
  </Button>
</Form>
        </Layout>
    )



}

export default PedidoProveedor;