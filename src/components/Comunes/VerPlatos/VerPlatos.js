import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { apiSetStateFromUrl } from '../Api'
import './VerPlatos.scss';


export const VerPlatos = ({ detalle, setOrdenes, handleEstadoPedido }) => {
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

    const TarjetaPlato = ({ detalle, colorOrden, idDetOr, indexDetalle }) => {

        const tarjetaRef = useRef();

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
                            <Button variant="secondary" className="buttonOrden" disabled={false} onClick={async _ => {
                                const result = await handleEstadoPedido(idDetOr, 1)
                                if (result === true) {
                                    tarjetaRef.current.style.backgroundColor = '#6c757d'
                                }
                            }}  >En cola</Button>
                        </Col>
                        <Col xs={12} md={8}>
                            <Button variant="warning" className="buttonOrden" disabled={false} onClick={async _ => {
                                const result = await handleEstadoPedido(idDetOr, 2)
                                if (result === true) {
                                    tarjetaRef.current.style.backgroundColor = '#ffc107'
                                }
                            }}>En preparación</Button>
                        </Col>
                        <Col xs={12} md={8}>
                            <Button variant="success" className="buttonOrden" disabled={false} onClick={async _ => {
                                const result = await handleEstadoPedido(idDetOr, 3)
                                if (result === true) {
                                    tarjetaRef.current.style.backgroundColor = '#28a745'
                                }
                            }}>Listo</Button>
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
                    switch (detalle.estadoPlato.idEstadoPlato) {
                        case 1:
                            colorOrden = '#6c757d';
                            // amarillo: '#ffc107
                            // VERDE: #28a745
                            //PLOMO: '#6c757d'
                            break;
                        case 2:
                            colorOrden = '#ffc107';
                            break;
                        case 3:
                            colorOrden = '#28a745';
                            break;
                        default:
                            colorOrden = '#6c757d'
                            break;
                    }

                    return (
                        <TarjetaPlato key={idx} indexDetalle={idx} idDetOr={detalle.idDetOr} detalle={detalle} colorOrden={colorOrden} />
                    )
                })}
            </Row>
        </div>
    )
}
