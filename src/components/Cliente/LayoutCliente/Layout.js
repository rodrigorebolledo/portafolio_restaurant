import React, { useState } from 'react'
import { Container, Button, Modal } from 'react-bootstrap';
import Header from '../../Comunes/Header/Header';
import Footer from '../../Comunes/Footer';
import MenuCliente from './MenuCliente';
import './Layout.scss';


const statusObject = {
    isLogin: false,
    itemCount: 0,
    show: false
}

const Layout = (props) => {

    const { children } = props;


    return (
        <>
            <Header statusObject={statusObject} />
            <MenuCliente />
            <Container className="container-client">
                {children}
            </Container>

            <Footer />
        </>
    )
}

export default Layout;