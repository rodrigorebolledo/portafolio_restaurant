import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap';
import { Layout } from '../Layout';

const Inicio = () => {
    useEffect(_ => {
        document.title = 'Admin Inicio';
    }, [])

    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Inicio</h3>
            </Col>
        </Layout>
    )
}

export default Inicio;