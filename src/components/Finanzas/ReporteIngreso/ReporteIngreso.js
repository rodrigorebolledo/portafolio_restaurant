import React, { useEffect, useState } from 'react'
import {Layout, LayoutCrud} from '../LayoutFinanzas';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';


const HEADER=['Total Ingresos del mes']
const HEADER2=['Total Ingresos del día']
const ReporteEgresos =() =>{
    
  const [ingresos, setIngresos] = useState([]);
  const [loading, setLoading] = useState([]);
  const [ingresosdiario, setIngresosDiario] = useState([]);
  const [loadingDiario, setLoadingDiario] = useState([]);

  useEffect(() => {

    apiSetStateFromUrl("/api/movimientos/totalingresosmes", setIngresos, setLoading);
    apiSetStateFromUrl("/api/movimientos/totalingresosdia", setIngresosDiario, setLoadingDiario);
    
    document.title = 'Finanzas | Reportes Ingresos';
}, [])
  
  
  return(
  <Layout>
  <LayoutCrud>
  {!loading ? <CrudTable items={ingresos} setItems={setIngresos} header={HEADER} title="Ingresos del ultimo mes"  url="/api/movimientos/totalingresosmes" nameId="totalIngresosMes" apiSetStateFromUrl={apiSetStateFromUrl}  eliminar={false} editar={false} agregar={false}  /> : <CustomSpinner />}
  </LayoutCrud>
  <LayoutCrud>
  {!loadingDiario ? <CrudTable items={ingresosdiario} setItems={setIngresosDiario} header={HEADER2} title="Ingresos del día"  url="/api/movimientos/totalingresosdia" nameId="totalIngresosDia" apiSetStateFromUrl={apiSetStateFromUrl}  eliminar={false} editar={false} agregar={false}  /> : <CustomSpinner />}
  </LayoutCrud>
  </Layout>
)
}
export default ReporteEgresos;