import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Layout } from '../Layout';

const ReportesHistoricos = () => {
    useEffect(_ => {
        document.title = 'Admin Ver Reportes';
    }, [])
    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Reportes Históritcos</h3>
            </Col>
        </Layout>
    )
}

export default ReportesHistoricos;