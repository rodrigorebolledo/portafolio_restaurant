import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NotFound from '../Comunes/NotFound';
import routes from './Config/routes';

const Cliente = () => {
    return (
        <>
            <Router>
                <Switch>
                    {routes.map((route) => (
                        <Route 
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    ))}
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
         </>
    );
}
export default Cliente;