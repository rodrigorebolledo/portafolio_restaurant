import React, { useEffect, useState } from 'react'
import {Layout, LayoutCrud} from '../LayoutFinanzas';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';


const HEADER=['Total Ingresos del mes']
const ReporteEgresos =() =>{
    
  const [ingresos, setIngresos] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {

    apiSetStateFromUrl("/api/movimientos/totalingresosmes", setIngresos, setLoading);
    
    document.title = 'Admin Ingresos Mensuales';
}, [])
  
  
  return(
  <Layout>
  <LayoutCrud>
  {!loading ? <CrudTable items={ingresos} setItems={setIngresos} header={HEADER} title="Ingresos del ultimo mes"  url="/api/movimientos/totalingresosmes" nameId="totalIngresosMes" apiSetStateFromUrl={apiSetStateFromUrl}  eliminar={false} editar={false} agregar={false}  /> : <CustomSpinner />}
  </LayoutCrud>
  </Layout>
)
}
export default ReporteEgresos;