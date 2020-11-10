import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.scss';
const Footer = () => {
    return (
        <div className="footer mt-3">
            <Container>
                <Row className="pt-3">
                    <Col className="col-12 col-sm-4">

                        <ul>
                            <h3>Servicios</h3>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-sm-4">
                        <ul>
                            <h3>Empresa</h3>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-sm-4">
                        <ul>
                            <h3>Cartas</h3>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row className="justify-content-center">
                    <p>Derechos reservados Restaurant Siglo XXI - 2020</p>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;