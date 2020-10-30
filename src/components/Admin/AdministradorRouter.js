import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NotFound from '../Comunes/NotFound';
import routes from './Config/routes';
import AppRoutes from './AppRoutes';
const AdministradorRouter = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <AppRoutes
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        isPrivate={route.isPrivate}
                    />
                ))}
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default AdministradorRouter;