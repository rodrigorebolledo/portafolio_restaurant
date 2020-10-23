import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Inicio from './Inicio';
import Mesas from './Mesas';
import Usuarios from './Usuarios';
import Productos from './Productos';
import GeneradorReportes from './GeneradorReportes';
import ReportesHistoricos from './ReportesHistoricos';
import NotFound from '../Comunes/NotFound';

const AdministradorRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/reportes_historicos">
                    <ReportesHistoricos />
                </Route>
                <Route exact path="/admin/generar_reportes">
                    <GeneradorReportes />
                </Route>
                <Route exact path="/admin/productos">
                    <Productos />
                </Route>
                <Route exact path="/admin/usuarios">
                    <Usuarios />
                </Route>
                <Route exact path="/admin/mesas">
                    <Mesas />
                </Route>
                <Route  exact path="/admin">
                    <Inicio />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
         </Router>
    )
}

export default AdministradorRouter;