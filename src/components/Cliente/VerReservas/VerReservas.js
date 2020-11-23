import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import Layout from '../LayoutCliente/';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { loginUser, loginInvitado, useAuthState, useAuthDispatch, registerUser } from '../../Context';

const VerReservas = () => {

    const [reservas, setReservas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const data = useAuthState();
    const DIRECCION = 'Oficinas Centrales 133'
    useEffect(_ => {
        document.title = 'Ver Reservas';
        apiSetStateFromUrl("/api/reservas/activas/", setReservas, setIsLoading, data.user.idUsuario);
    }, [])


    const PrintReservas = _ => {
        console.log(reservas);
        return reservas.map((reserva) => {
            let fechaInicioMoment = moment(reserva.fechaInicio)
            let diaInicio = fechaInicioMoment.format("DD/MM/YYYY");
            let horaInicio = fechaInicioMoment.format("hh:mm")
            return (
                <Row className="justify-content-center mt-5">
                    <div>
                        <Row>Dirección: {DIRECCION}</Row>
                        <Row>Número de mesa: {reserva.mesa.numeroMesa}</Row>
                        <Row>El día {diaInicio} a las: {horaInicio}</Row>
                    </div>
                </Row>
            )
        })
    }

    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Ver Reservas</h3>
            </Col>
            <Row className="justify-content-center"><h5>Aquí encontrarás tus reservas actuales.</h5></Row>
            {reservas.length ? <PrintReservas /> : null}
        </Layout>
    )
}
export default VerReservas;