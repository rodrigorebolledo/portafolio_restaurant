import React from 'react';
import { Row, Spinner, Col } from 'react-bootstrap';

export const CustomSpinner = () => {
    return (
        <Row className="justify-content-center" style={{ minWidth: '100%' }}>
            <Spinner animation="border" />
        </Row>
    )
}
