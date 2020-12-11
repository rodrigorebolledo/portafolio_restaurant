import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { apiSetStateFromUrl } from '../Api'
import './VerPlatos.scss';


export const VerOrdenes = ({ detalle, setOrdenes, handleEstadoPedido }) => {
    // const [colorOrden, setColorOrden] = useState('#6c757d');
    const [isDisabledCola, setIsDisabledCola] = useState(true);
    const [isDisabledPrep, setIsDisabledPrep] = useState(false);
    const [isDisabledListo, setIsDisabledListo] = useState(true);


    const handleBotonEnCola = _ => {
        // setColorOrden('#6c757d');
        setIsDisabledCola(true);
        setIsDisabledPrep(false);
        setIsDisabledListo(true);

    }

    const handleBotonPreparacion = _ => {
        // setColorOrden('#ffc107');
        setIsDisabledCola(false);
        setIsDisabledListo(false);

    }

    const handleBotonListo = _ => {
        // setColorOrden('#28a745');
        setIsDisabledListo(true);
        setIsDisabledCola(true);
        setIsDisabledPrep(false);
    }

    const TarjetaPlato = ({ detalle, colorOrden, idDetOr, bloquear }) => {

        const tarjetaRef = useRef();
        console.log(bloquear);
        return (
            <Col xs={12} md={6}>
                <div className="tarjetaOrden mt-3" ref={tarjetaRef} style={{ backgroundColor: colorOrden }}>
                    <Row className="justify-content-center mt-3">
                        <h3>Plato: {detalle.plato.nombrePlato} </h3>
                    </Row>
                    <Row className="justify-content-center">
                        <h4>Cantidad: {detalle.cantidadDetOr}</h4>
                    </Row>
                    <Row className="justify-content-center buttonContainer mt-3">
                        <Col xs={12} md={8}>
                            <Button disabled={bloquear} variant="success" className="buttonOrden" onClick={async _ => {
                                const result = await handleEstadoPedido(idDetOr, 4)
                                if (result === true) {
                                    tarjetaRef.current.style.backgroundColor = '#28a745'
                                }
                            }}>Entregado</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }


    return (
        <div className="container">
            <Row className="mt-3">
                {detalle.map((detalle, idx) => {
                    let colorOrden = '#6c757d';
                    let bloquear = false;
                    switch (detalle.estadoPlato.idEstadoPlato) {
                        case 1:
                            colorOrden = '#6c757d';
                            // amarillo: '#ffc107
                            // VERDE: #28a745
                            //PLOMO: '#6c757d'
                            bloquear = true;
                            break;
                        case 2:
                            colorOrden = '#ffc107';
                            bloquear = true;
                            break;
                        case 3:
                            colorOrden = '#ffc107';
                            bloquear = false;
                            break;
                        case 4:
                            colorOrden = '#28a745';
                            bloquear = true;
                            break;
                        default:
                            colorOrden = '#6c757d'
                            bloquear = true;
                            break;
                    }

                    return (
                        <TarjetaPlato bloquear={bloquear} key={idx} indexDetalle={idx} idDetOr={detalle.idDetOr} detalle={detalle} colorOrden={colorOrden} />
                    )
                })}
            </Row>
        </div>
    )
}
