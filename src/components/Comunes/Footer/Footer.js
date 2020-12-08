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
                            <h3>Conócenos</h3>
                            <li><a className="fa fa-map" href="https://www.google.cl/maps"> Colo-Colo 120, Concepción</a></li>
                            <li><a className="fa fa-location-arrow" href="https://www.google.cl/maps"> Zona de despacho</a></li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-sm-4">
                        <ul>
                            <h3>Redes Sociales</h3>
                            <li><a className="fa fa-facebook" href="https://web.facebook.com/?_rdc=1&_rdr"> Facebook</a></li>
                            <li><a className="fa fa-instagram" href="https://www.instagram.com/"> Instagram</a></li>
                            <li><a className="fa fa-twitter" href="https://twitter.com/?lang=es"> Twitter</a></li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-sm-4">
                        <ul>
                            <h3>Contacto</h3>
                            <div className="icon-bar">


                                <li><a href="https://web.whatsapp.com/" className="fa fa-whatsapp"> WhatsApp: +56957933117</a></li>
                                <li><a className="fa fa-phone-square"> Teléfono Fijo: 0412352544</a></li>
                            </div>
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