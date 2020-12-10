import React, { useEffect, useState } from 'react'
import {Layout, LayoutCrud} from '../LayoutFinanzas';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';


const HEADER=['Total egresos del mes']
const ReporteEgresos =() =>{
    
  const [egresos, setEgresos] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {

    apiSetStateFromUrl("/api/movimientos/totalegresosmes", setEgresos, setLoading);
    
    document.title = 'Admin Egresos Mensuales';
}, [])
  
  
  return(
  <Layout>
  <LayoutCrud>
  {!loading ? <CrudTable items={egresos} setItems={setEgresos} header={HEADER} title="Egresos del ultimo mes"  url="/api/movimientos/totalegresosmes" nameId="totalEgresosMes" apiSetStateFromUrl={apiSetStateFromUrl}  eliminar={false} editar={false} agregar={false}  /> : <CustomSpinner />}
  </LayoutCrud>
  </Layout>
)
}
export default ReporteEgresos;