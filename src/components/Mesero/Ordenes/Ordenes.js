import React, { useEffect} from 'react';
import Layout from '../LayoutMesero';

export default function Reportes(){

    useEffect(() => {
        document.title = 'Mesero | Órdenes';
    }, [])

    return(
        <Layout>
            <h1>Órdenes</h1>
        </Layout>
    )
}