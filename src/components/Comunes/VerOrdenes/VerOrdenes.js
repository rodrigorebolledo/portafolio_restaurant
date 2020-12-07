import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { apiSetStateFromUrl } from '../Api'
import ExampleImage from '../../../assets/img/exampleImage.png'
import './VerOrdenes.scss';
// {!loading ?  <h1>asdsd<h1> : <CustomSpinner />}



export const VerOrdenes = ({ orden }) => {
    console.log(orden)
    const [colorOrden, setColorOrden] = useState('#6c757d');
    const [isDisabledCola, setIsDisabledCola] = useState(true);
    const [isDisabledPrep, setIsDisabledPrep] = useState(false);
    const [isDisabledListo, setIsDisabledListo] = useState(true);


    const handleBotonEnCola = _ => {
        setColorOrden('#6c757d');
        setIsDisabledCola(true);
        setIsDisabledPrep(false);
        setIsDisabledListo(true);

    }

    const handleBotonPreparacion = _ => {
        setColorOrden('#ffc107');
        setIsDisabledCola(false);
        setIsDisabledListo(false);

    }

    const handleBotonListo = _ => {
        setColorOrden('#28a745');
        setIsDisabledListo(true);
        setIsDisabledCola(true);
        setIsDisabledPrep(false);
    }


    return (
        <div className="container">
            <Row className="mt-3">
                <Col xs={12} md={4}>
                    <div className="tarjetaOrden" style={{ backgroundColor: colorOrden }}>
                        <Row className="justify-content-center mt-3">
                            <h3>Plato: {orden.plato.nombrePlato} </h3>
                        </Row>
                        <Row className="justify-content-center">
                            <h4>Cantidad: {orden.cantidadDetOr}</h4>
                        </Row>
                        <Row className="justify-content-center buttonContainer mt-3">
                            <Col xs={12} md={8}>
                                <Button variant="secondary" className="buttonOrden" disabled={isDisabledCola} onClick={_ => handleBotonEnCola()}  >En cola</Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <Button variant="warning" className="buttonOrden" disabled={isDisabledPrep} onClick={_ => handleBotonPreparacion()}>En preparación</Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <Button variant="success" className="buttonOrden" disabled={isDisabledListo} onClick={_ => handleBotonListo()}>Listo</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
