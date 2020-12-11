import React, { useEffect, useState } from 'react'
import {Layout, LayoutCrud} from '../LayoutFinanzas';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';


const HEADER=['Total egresos del mes']
const HEADER2=['Total egresos del día']
const ReporteEgresos =() =>{
    
  const [egresos, setEgresos] = useState([]);
  const [loading, setLoading] = useState([]);
  const [egresosDiario, setEgresosDiario] = useState([]);
  const [loadingDiario, setLoadingDiario] = useState([]);

  useEffect(() => {
    
    apiSetStateFromUrl("/api/movimientos/totalegresosmes", setEgresos, setLoading);
    apiSetStateFromUrl("/api/movimientos/totalegresosdia", setEgresosDiario, setLoadingDiario);
    
    document.title = 'Finanzas | Reportes Egresos';
}, [])
  
  
  return(
  <Layout>
  <LayoutCrud>
  {!loading ? <CrudTable items={egresos} setItems={setEgresos} header={HEADER} title="Egresos del ultimo mes"  url="/api/movimientos/totalegresosmes" nameId="totalEgresosMes" apiSetStateFromUrl={apiSetStateFromUrl}  eliminar={false} editar={false} agregar={false}  /> : <CustomSpinner />}
  </LayoutCrud>
  <LayoutCrud>
  {!loadingDiario ? <CrudTable items={egresosDiario} setItems={setEgresosDiario} header={HEADER2} title="Egresos del día"  url="/api/movimientos/totalegresosdia" nameId="totalEgresosMes" apiSetStateFromUrl={apiSetStateFromUrl}  eliminar={false} editar={false} agregar={false}  /> : <CustomSpinner />}
  </LayoutCrud>
  </Layout>
)
}
export default ReporteEgresos;