import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AppRoutes from './AppRoutes';
import NotFound from '../Comunes/NotFound';
import routes from './Config/routes';

const Cliente = () => {
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
    );
}
export default Cliente;