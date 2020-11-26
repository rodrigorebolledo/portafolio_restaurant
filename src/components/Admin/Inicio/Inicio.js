import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Layout } from '../Layout';
import '../Inicio/DivCard.scss'


const Inicio = () => {
    useEffect(_ => {
        document.title = 'Admin Inicio';
    }, [])

    return (
        <Layout>
            <Col>
                <div class="w3-card-4 w3-green" >
                    <Row className="justify-content-center mt-5">
                        <div className="divCard">
                            <h1>Ventas diarias </h1>
                            <Row>
                                <i class="fa fa-usd" aria-hidden="true"></i>
                                <h1>120.000</h1>
                            </Row>
                        </div>
                    </Row>
                </div>
                <div class="w3-card-4 w3-green" >
                    <Row className="justify-content-center mt-5">
                        <div className="divCard">
                            <h1>Ventas mensuales </h1>
                            <Row>
                                <i class="fa fa-usd" aria-hidden="true"></i>
                                <h1>120.000</h1>
                            </Row>
                        </div>
                    </Row>
                </div>
                <div class="w3-card-4 w3-red" >
                    <Row className="justify-content-center mt-5">
                        <div className="divCard">
                            <h1>Egresos diarios </h1>
                            <Row>
                                <i class="fa fa-usd" aria-hidden="true"></i>
                                <h1>120.000</h1>
                            </Row>
                        </div>
                    </Row>
                </div>
                <div class="w3-card-4 w3-red" >
                    <Row className="justify-content-center mt-5">
                        <div className="divCard">
                            <h1>Egresos mensuales </h1>
                            <Row>
                                <i class="fa fa-usd" aria-hidden="true"></i>
                                <h1>120.000</h1>
                            </Row>
                        </div>
                    </Row>
                </div>
            </Col>
        </Layout>
    )
}

export default Inicio;