import React, { useState, useEffect, Component } from 'react';
import Layout from '../LayoutMesero';
import { Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { apiSetStateFromUrl, apiGetElements } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import ExampleImage from '../../../assets/img/exampleImage.png'
import { addPlate, useCarroState, useCarroDispatch } from '../../Context';



const Orden = () => {
    const plateDetails = useCarroState();

    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [listaPlatosSeleccionados, setListaPlatosSeleccionados] = useState([]);
    const [totalOrden, setTotalOrden] = useState(0);
    const dispatch = useCarroDispatch();
    const { platosSeleccionados, totalPago } = useCarroState();
    //let listaPlatosSeleccionados = []



    const pagar =() =>{
        alert('Pago procesado')
    }

    const agregarCarro = (plato) => {
        const platoCopy = plato
        platoCopy['idRandom'] = Math.random();
        console.log(platoCopy)
        listaPlatosSeleccionados.push(platoCopy)
        const sumaPago = totalOrden + platoCopy.valorPlato;
        setTotalOrden(sumaPago);
        addPlate(dispatch, { platosSeleccionados: listaPlatosSeleccionados, totalPago: sumaPago });
        alert(plato.nombrePlato + " se ha añadido al carrito.")
    }

    useEffect(() => {
        console.log(plateDetails.totalPago)
        if (plateDetails.platosSeleccionados !== undefined) {
            setListaPlatosSeleccionados(plateDetails.platosSeleccionados);
        }

        if (plateDetails.totalPago !== undefined) {
            setTotalOrden(plateDetails.totalPago);
        }
    }, [plateDetails])




    const PrintPlatos = () => (
        platos.map((plato, idx) => (
            <Col key={idx} xs={12} md={4} className="mt-3 tarjetaPago">
                <Card>
                    {plato.fotoPlato ? <Card.Img variant="top" src={plato.fotoPlato} /> : <Card.Img variant="top" src={ExampleImage} />}
                    <Card.Body>
                        <Card.Title>{plato.nombrePlato}</Card.Title>
                        <Card.Text>
                            Valor plato: ${plato.valorPlato} CLP
                        </Card.Text>
                        <Card.Text>
                            Tiempo estimado: {plato.tiempoPlato} minutos
                        </Card.Text>
                        <Button variant="primary" onClick={() => agregarCarro(plato, plato.valorPlato)}>Agregar a la orden</Button>
                        
                    </Card.Body>
                </Card>
              
            </Col>
        ))
    )



    useEffect(_ => {
        apiSetStateFromUrl('/api/platos', setPlatos, setLoading);
        if (localStorage.getItem('platosCarro')) {
            setListaPlatosSeleccionados(JSON.parse(localStorage.getItem('platosCarro')));
        }

        if (localStorage.getItem('totalCarro')) {
            setTotalOrden(JSON.parse(localStorage.getItem('totalCarro')));
        }
        document.title = 'Mesero | Orden';
    }, [])

    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Ordenar</h3>
                <Row className="justify-content-center">
                    {!loading && platos.length > 0 ?
                        <PrintPlatos />
                        : <CustomSpinner />}
                      
                </Row>
                <Button href='https://sandbox.flow.cl/btn.php?token=6gdyjy6' target='_blank'>Pagar</Button>
            </Col>
        </Layout>
    )
}
export default Orden;


