import React from 'react'
import { Container, Row } from 'react-bootstrap';
import MenuAdmin from './MenuAdmin';
import Header from '../../Comunes/Header/Header';
import Footer from '../../Comunes/Footer'
import './Layout.scss';
const statusObject = {
    isLogin: true,
    isAdmin: true,
    itemCount: 1
}

 export const Layout = (props) => {

    const { children } = props;
    
    return (
        <>
            <Header statusObject={statusObject} />
            <MenuAdmin />
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
