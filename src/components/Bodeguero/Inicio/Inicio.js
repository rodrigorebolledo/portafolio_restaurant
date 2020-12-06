import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Layout } from '../LayoutBodeguero';
//import '../Inicio/DivCard.scss'


const Inicio = () => {
    useEffect(_ => {
        document.title = 'Inicio';
    }, [])

    return (
        <Layout>
            <div>Inicio</div>
        </Layout>
    )
}

export default Inicio;