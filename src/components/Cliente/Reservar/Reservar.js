import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, FormControl, InputGroup, Button, Form } from 'react-bootstrap';
import Layout from '../LayoutCliente/';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { addElment } from '../../Comunes/Api';
import './Reservar.scss';
import moment from 'moment';
const Reservar = () => {
    
    const IDUSUARIOPERSONA = localStorage.getItem('currentUser')
            ? JSON.parse(localStorage.getItem('currentUser')).idUsuario
            : 6;
    const [personasPorMesa, setPersonasPorMesa] = useState(4);
    const [mesas, setMesas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [mesaSeleccionada, setMesaSeleccionada] = useState();
    const [fechaReserva, setFechaReserva] = useState();
    const [reservada, setReservada] = useState();
    const [paso, setPaso] = useState(1);
    const [rutPersona, setRutPersona] = useState(IDUSUARIOPERSONA);
 
    const [fechaMinima, setFechaMinima] = useState(undefined);

    useEffect(_ => {
        document.title = 'Cliente | Reservar';
        setFechaReserva(moment().format('YYYY-MM-DDTHH:mm'));
        setFechaMinima(moment().format('YYYY-MM-DDTHH:mm'));
        apiSetStateFromUrl("/api/rut/usuario/", setRutPersona, undefined, IDUSUARIOPERSONA);
        console.log(IDUSUARIOPERSONA);
    }, [])

   

    const handleBuscarMesas = () => {
        // let flagPosiblesMesas = [];
        // setPosiblesMesasLoading(true);
        // Promise.all(
        //     mesas.map((mesa) => {
        //         if (mesa.capacidadMesa === personasPorMesa && mesa.estado.idEstadoMesa === 1) {
        //             flagPosiblesMesas.push(mesa);
        //         } else if (mesa.capacidadMesa > personasPorMesa && mesa.estado.idEstadoMesa === 1 && (mesa.capacidadMesa - personasPorMesa) <= 2 && flagPosiblesMesas.length <= 1) {
        //             flagPosiblesMesas.push(mesa);
        //         }
        //     })).then(_ => {
        //         setPosiblesMesas(flagPosiblesMesas);
        //         setPosiblesMesasLoading(false);
        //     })
        const fechaInicio = moment(fechaReserva).format("DD-MM-YYYY");
        const horaInicio = moment(fechaReserva).format("HH:mm");
        console.log(fechaReserva)
        if (fechaReserva !== undefined) {
            apiSetStateFromUrl(`/api/mesas/reserva/${personasPorMesa}/${fechaInicio}%20${horaInicio}`, setMesas, setIsLoading);
        }

    }



    const handleCrearReserva = _ => {
        const fechaInicio = moment(fechaReserva).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        const fechaTermino = moment(fechaReserva).add(15, 'minutes').format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        const idMesa = mesaSeleccionada.idMesa;
        const rutReserva = rutPersona;
        // const rutReserva = localStorage.getItem('currentUser')
        //     ? JSON.parse(localStorage.getItem('currentUser')).rut
        //     : '19816100-4';
        const idUsuario = localStorage.getItem('currentUser')
            ? JSON.parse(localStorage.getItem('currentUser')).idUsuario
            : 6;
        const objMesa = {
            fechaInicio: fechaInicio,
            fechaTermino: fechaTermino,
            rutReserva: rutReserva,
            mesa: { idMesa: idMesa },
            usuario: { idUsuario: idUsuario }
        }

        return objMesa
    }

    const handleReservar = async _ => {
        let objeto = handleCrearReserva();
        let valid = false;
        console.log(objeto)
        if (objeto !== undefined && objeto !== {}) {
            valid = await addElment("/api/reservas", objeto)
        } else {
            alert('Error al crear reserva');
            return;
        }
        if (valid !== false) {
            console.log('Agregado correctamente');
            setReservada(objeto);
        } else {
            console.log('Ha ocurrido un error')
        }
    }


    const PrintPosiblesMesas = _ => {
        return mesas.map((mesa) => {
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

    // const PrintMesaSeleccionada = _ => {
    //     return (
    //         <>
    //             <Row className="mt-3 justify-content-center">
    //                 <Col xs={12} md={6}>
    //                     <Form.Label>Selecciona una fecha para la reserva</Form.Label>
    //                     <Form.Control type="datetime-local" value={fechaReserva} onChange={(e) => setFechaReserva(e.target.value)} />
    //                     <p style={{ color: 'red' }}>La reserva tendrá una validez de 15 minutos. Sea puntual por favor.</p>
    //                 </Col>

    //             </Row>
    //             {fechaReserva !== undefined ?
    //                 <Row className="justify-content-center mt-3">
    //                     <Button onClick={() => handleBuscarMesas()}>Buscar Mesas</Button>
    //                 </Row> : null
    //             }
    //         </>
    //     )
    // }

    const PrintReservar = _ => (
        <>
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
                        <Button variant="outline-secondary" onClick={() => setPaso(2)}>Siguiente</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
            {paso === 2 && <PrintSeleccionarFecha />}
            <Row className="justify-content-center">
                {!isLoading && mesas.length === 0 ? <p>No se han encontrado mesas para este número de personas</p> : !isLoading && mesas.length > 0 ? <PrintPosiblesMesas /> : null}
            </Row>
            {mesaSeleccionada !== undefined ?
                <Row className="justify-content-center mt-3">
                    <Button onClick={_ => handleReservar()}>Reservar mesa número: {mesaSeleccionada.numeroMesa}</Button>
                </Row> : null}
        </>
    );

    const PrintSeleccionarFecha = _ => {
        const fechaFinal = moment().add(1, 'months').format('YYYY-MM-DDTHH:mm')
        return (
            <form>
                <Row className="mt-3 justify-content-center">
                    <Col xs={12} md={6}>

                        <Form.Label>Seleccione una fecha y hora para la reserva</Form.Label>

                        {fechaMinima != undefined ? (
                            <InputGroup>
                                <Form.Control type="datetime-local" required
                                    value={fechaReserva} onChange={(e) => {
                                        console.log(e.target.value);
                                        setFechaReserva(e.target.value)
                                    }}
                                    min={fechaMinima} max={fechaFinal}
                                />
                                <InputGroup.Append><Button onClick={_ => handleBuscarMesas()}>Buscar Mesa</Button></InputGroup.Append>
                            </InputGroup>
                        ) : null}

                        <p style={{ color: 'red' }}>La reserva tendrá una validez de 15 minutos. Sea puntual por favor.</p>
                    </Col>
                </Row>
            </form>
        )
    }

    const Reserva = _ => {
        const fechaInicioMoment = moment(reservada.fechaInicio);
        const fechaFinMoment = moment(reservada.fechaTermino);
        const fechaInicioFormateada = fechaInicioMoment.format('DD/MM/YYYY');
        const horaInicioFormateada = fechaInicioMoment.format('HH:mm');
        const horaFinFormateada = fechaFinMoment.format('HH:mm');
        return (
            <>
                <Row className="justify-content-center mt-3">
                    <h2>Reserva de la mesa: {mesaSeleccionada.numeroMesa} realizada exitosamente.</h2>
                </Row>
                <Row className="justify-content-center mt-3">
                    <h4>Muchas gracias por reservar con nosotros.</h4>
                </Row>
                <Row className="justify-content-center mt-3">
                    <h5>Te esperamos el día {fechaInicioFormateada} a las {horaInicioFormateada} en "Ejemplo Dirección".</h5>
                </Row>
                <Row className="justify-content-center mt-3">
                    <p style={{ color: 'red' }}>La reserva tendrá una validez de 15 minutos. Llegar antes de las: {horaFinFormateada}.</p>
                </Row>
            </>
        )
    }


    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Reservas</h3>
                {reservada === undefined ? <PrintReservar /> : <Reserva />}
            </Col>
        </Layout>
    )
}
export default Reservar;