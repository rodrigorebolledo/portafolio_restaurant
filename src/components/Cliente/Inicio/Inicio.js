import React, { useState, useEffect } from 'react';
import Layout from '../LayoutCliente/';
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import ExampleImage from '../../../assets/img/exampleImage.png'


const Inicio = () => {


    const [platos, setPlatos] = useState([])
    const [loading, setLoading] = useState(true);
 
    const PrintPlatos = () => (
        platos.map((plato, idx) => (
            <Col key={idx} xs={12} md={4} className="mt-3">
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
                    </Card.Body>
                </Card>
            </Col>
        ))
    )

    useEffect(_ => {
        apiSetStateFromUrl('/api/platos', setPlatos, setLoading);
        document.title = 'Cliente | Inicio';
    }, [])

    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Platos</h3>
                <Row>
                    {!loading && platos.length > 0 ? <PrintPlatos /> : <CustomSpinner />}
                </Row>
            </Col>
        </Layout>
    )
}
export default Inicio;