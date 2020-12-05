import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../../Comunes/Header/Header';
import Footer from '../../Comunes/Footer';
import MenuGarzon from './MenuGarzon';
import './Layout.scss';


const statusObject = {
    isLogin: false,
    itemCount: 1
}

const Layout = (props) => {

    const { children } = props;
    
    return (
        <>
            <Header statusObject={statusObject} />
            <MenuGarzon />
            <Container className="container-client">
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout;