import React,{ useState, useEffect , Component} from 'react';
import Layout from '../LayoutCliente';
import CrudTable from '../../Comunes/CrudTable';
import { Row, Col, Card, CardGroup, Button} from 'react-bootstrap';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import ExampleImage from '../../../assets/img/exampleImage.png'
import { addPlate, useCarroState, useCarroDispatch } from '../../Context';

const Orden = () => {

    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [listaPlatosSeleccionados, setListaPlatosSeleccionados] = useState([]);
    const dispatch = useCarroDispatch();
    const { platosSeleccionados, totalPago } = useCarroState();
    //let listaPlatosSeleccionados = []

    const agregarCarro = (plato, valorPlato) =>{
        listaPlatosSeleccionados.push(plato)
        console.log(listaPlatosSeleccionados);
        const platoAgregado = addPlate(dispatch, {platosSeleccionados: listaPlatosSeleccionados, totalPago: valorPlato});
        console.log(platoAgregado);
    }
 
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
                        <Button variant="primary" onClick={() => agregarCarro(plato, plato.valorPlato)}>Agregar al carro</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))
    )



    useEffect(_ => {
        apiSetStateFromUrl('/api/platos', setPlatos, setLoading);
        document.title = 'Inicio';
    }, [])

    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Ordenar</h3>
                <Row className="justify-content-center">
                    {!loading && platos.length > 0 ? 
                        <PrintPlatos/>
                     : <CustomSpinner />}
                </Row>
                
            </Col>
        </Layout>
    )
}
export default Orden;


