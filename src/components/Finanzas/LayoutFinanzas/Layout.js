import React from 'react'
import { Container, Col, Row, Table  } from 'react-bootstrap';
import Header from '../../Comunes/Header/Header';
import Footer from '../../Comunes/Footer';
import MenuFinanzas from './MenuFinanzas';

import './Layout.scss';


const statusObject = {
    isLogin: false,
    itemCount: 1
}

export const Layout = (props) => {

    const { children } = props;
    
    return (
        <>
            <Header statusObject={statusObject} />
            <MenuFinanzas />
            <Container className="container-client">
                {children}
            </Container>
            <Footer />
        </>
    )
}

    export const LayoutCrud = (props) => {
        const { children } = props;
        return (
            <Row className="mt-5 layout-crud">
                {children}
            </Row>
        )
    
    };



export default Layout;