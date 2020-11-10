import React, { useState, useEffect } from 'react';
import { Col, Row, FormControl, InputGroup, Button, Form } from 'react-bootstrap';
import Layout from '../LayoutCliente/';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import './Reservar.scss';
import moment from 'moment';
const Reservar = () => {

    const [personasPorMesa, setPersonasPorMesa] = useState(4);
    const [mesas, setMesas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [posiblesMesasLoading, setPosiblesMesasLoading] = useState(true);
    const [posiblesMesas, setPosiblesMesas] = useState([]);
    const [mesaSeleccionada, setMesaSeleccionada] = useState();
    const [fechaReserva, setFechaReserva] = useState();
    useEffect(_ => {
        apiSetStateFromUrl("/mesas", setMesas, setIsLoading);
    }, [])

    const handleBuscarMesas = () => {
        let flagPosiblesMesas = [];
        setPosiblesMesasLoading(true);
        Promise.all(
            mesas.map((mesa) => {
                if (mesa.capacidadMesa === personasPorMesa && mesa.estado.idEstadoMesa === 1) {
                    flagPosiblesMesas.push(mesa);
                } else if (mesa.capacidadMesa > personasPorMesa && mesa.estado.idEstadoMesa === 1 && (mesa.capacidadMesa - personasPorMesa) <= 2 && flagPosiblesMesas.length <= 1) {
                    flagPosiblesMesas.push(mesa);
                }
            })).then(_ => {
                setPosiblesMesas(flagPosiblesMesas);
                setPosiblesMesasLoading(false);
            })


    }

    const handleReservarMesa = _ => {
        const fechaInicio = moment(fechaReserva).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        const fechaFin = moment(fechaReserva).add(15, 'minutes').format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        console.log(fechaInicio);
        console.log(fechaFin);
    }


    const PrintPosiblesMesas = _ => {
        return posiblesMesas.map((mesa) => {
            return (
                <Col key={mesa.idMesa} xs={6} md={2} className="bloqueMesa" onClick={_ => setMesaSeleccionada(mesa)}>
                    <Col className="align-self-center" style={{ marginTop: '35%' }}>
                        <Row className="justify-content-center">Número mesa: {mesa.numeroMesa}</Row>
                        <Row className="justify-content-center">Capacidad: {mesa.capacidadMesa}</Row>
                    </Col>
                </Col>
            )
        })
    }

    const PrintMesaSeleccionada = _ => {
        return (
            <>
                <Row className="justify-content-center mt-3">
                    <b>Se ha seleccionado la mesa número: {mesaSeleccionada.numeroMesa}</b>
                </Row>
                <Row className="mt-3 justify-content-center">
                    <Col xs={12} md={6}>
                        <Form.Label>Selecciona una fecha para la reserva</Form.Label>
                        <Form.Control type="datetime-local" value={fechaReserva} onChange={(e) => setFechaReserva(e.target.value)} />
                        <p style={{ color: 'red' }}>La reserva tendrá una validez de 15 minutos. Sea puntual por favor.</p>
                    </Col>

                </Row>
                {fechaReserva !== undefined ?
                    <Row className="justify-content-center mt-3">
                        <Button onClick={() => handleReservarMesa()}>Reservar</Button>
                    </Row> : null
                }
            </>
        )
    }

    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Reservas</h3>
                <Row className="justify-content-center">
                    <h4>¿Para cuántas personas desea reservar?</h4>
                </Row>
                <Row xs={7} md={5} className="justify-content-center mt-3">
                    <InputGroup>
                        <FormControl
                            type="number"
                            min="1"
                            value={personasPorMesa}
                            onChange={(e) => setPersonasPorMesa(parseInt(e.target.value))}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" disabled={isLoading} onClick={() => handleBuscarMesas()}>Buscar Mesas</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Row>
                <Row className="justify-content-center mt-3">
                    {posiblesMesasLoading === false && !posiblesMesas.length ? <p>No se han encontrado mesas para este número de personas</p> : <PrintPosiblesMesas />}
                </Row>
                {mesaSeleccionada !== undefined ? <PrintMesaSeleccionada /> : null}
            </Col>
        </Layout>
    )
}
export default Reservar;