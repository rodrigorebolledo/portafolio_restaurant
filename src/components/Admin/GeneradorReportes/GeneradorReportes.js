import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Layout } from '../Layout';

const GeneradorReportes = () => {
    useEffect(_ => {
        document.title = 'Admin Generar Reportes';
    }, [])
    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Generar Reportes</h3>
            </Col>
        </Layout>
    )
}

export default GeneradorReportes;