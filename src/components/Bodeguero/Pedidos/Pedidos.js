import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Layout } from '../LayoutBodeguero';
//import '../Inicio/DivCard.scss'


const Pedidos = () => {
    useEffect(_ => {
        document.title = 'Pedidos';
    }, [])

    return (
        <Layout>
            <div>Pedidos</div>
        </Layout>
    )
}

export default Pedidos;