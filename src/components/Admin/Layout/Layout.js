import React from 'react'
import { Container, Row } from 'react-bootstrap';
import MenuAdmin from './MenuAdmin'

const Layout = (props) => {

    const { children } = props;
    
    return (
        <>
            <MenuAdmin />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout;


export const LayoutCrud = (props) => {
    const { children } = props;
    return (
        <Row className="mt-5">
            {children}
        </Row>
    )

};