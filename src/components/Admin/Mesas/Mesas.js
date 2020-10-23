import React from 'react';
import  Layout, { LayoutCrud } from '../Layout/Layout';
import CrudTable from '../CrudTable';

const Mesas = () => {
    return (
        <Layout>
            <LayoutCrud>
                <CrudTable />
            </LayoutCrud>
        </Layout>
    )
}

export default Mesas;