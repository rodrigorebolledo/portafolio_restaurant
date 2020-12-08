import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../../Comunes/Header/Header';
import Footer from '../../Comunes/Footer';
import MenuMesero from './MenuMesero';
import './Layout.scss';


const statusObject = {
    isLogin: false,
    itemCount: 1,
    show: true,
}

const Layout = (props) => {

    const { children } = props;

    return (
        <>
            <Header statusObject={statusObject} />
            <MenuMesero />
            <Container className="container-client">
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout;