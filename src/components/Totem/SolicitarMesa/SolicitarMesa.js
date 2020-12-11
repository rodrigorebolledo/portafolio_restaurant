import React, { useState, useEffect } from 'react';
import { Col, Row, FormControl, InputGroup, Button, Form } from 'react-bootstrap';
import { Layout } from '../Layout';
import { apiGetElements } from '../../Comunes/Api';
import { addElment, editById } from '../../Comunes/Api';
import './SolicitarMesa.scss';
import moment from 'moment';
const SolicitarMesa = () => {

    const [mesas, setMesas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [mesaSeleccionada, setMesaSeleccionada] = useState(undefined);
    const [reservada, setReservada] = useState(undefined);
    const [salir, setSalir] = useState(false);

    useEffect(_ => {
        document.title = 'Totem | Solicitar Mesa';
        handleBuscarMesas()
    }, [])


    useEffect(() => {
        if (salir === true) {
            setIsLoading(true)
            setMesas([])
            setMesaSeleccionada(undefined)
            setSalir(false);
            setReservada(undefined)
            handleBuscarMesas();

        }
    }, [salir])



    const handleBuscarMesas = async () => {

        const allTables = await apiGetElements('/api/mesas');
        const filterTables = allTables.filter((t) => t.estado.idEstadoMesa === 1);
        setIsLoading(false);
        setMesas(filterTables);


    }



    const handleSolicitarMesa = async (obj) => {
        let objeto = undefined;
        objeto = {
            "idMesa": obj.idMesa,
            "numeroMesa": obj.numeroMesa,
            "capacidadMesa": obj.capacidadMesa,
            "estado": { "idEstadoMesa": 2 }
        };
        let valid = false;
        if (objeto !== undefined && objeto !== {}) {
            valid = await editById("/api/mesas/", obj.idMesa, objeto)
        } else {
            alert('Error al solicitar mesa');
            return;
        }
        if (valid !== false) {
            console.log('La mesa ha sido tomado excitosamente, por favor toma asiento.');
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

    const PrintMesas = _ => (
        <>
            <Row className="justify-content-center">
                {!isLoading && mesas.length === 0 ? <p style={{ color: 'red' }}>No se han encontrado mesas disponibles en estos momentos</p> : !isLoading && mesas.length > 0 ? <PrintPosiblesMesas /> : null}
            </Row>
            {mesaSeleccionada !== undefined ?
                <Row className="justify-content-center mt-3">
                    <Button onClick={_ => handleSolicitarMesa(mesaSeleccionada)}>Solicitar mesa número: {mesaSeleccionada.numeroMesa}</Button>
                </Row> : null}
        </>
    );


    const handleSalir = () => {

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
                    <h2>La mesa número: {mesaSeleccionada.numeroMesa} ha sido tomada exitosamente.</h2>
                </Row>
                <Row className="justify-content-center mt-3">
                    <h4>Muchas gracias por comer con nosotros.</h4>
                </Row>
                <Row className="justify-content-center mt-3">
                    <h5>Favor esperar su atención en la mesa solicitada.</h5>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Button onClick={() => setSalir(true)}>Salir</Button>
                </Row>
            </>
        )
    }


    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Mesas disponibles</h3>
                {reservada === undefined ? <PrintMesas /> : <Reserva />}
            </Col>
        </Layout>
    )
}
export default SolicitarMesa;