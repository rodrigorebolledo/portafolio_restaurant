import React, { createContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import routes from './GlobalConfig/routes';
import NotFound from './components/Comunes/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route) => (
                        <Route 
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    ))
                }
                <Route>
                    <NotFound />
                </Route>
            </Switch>
         </Router>
    );
}

export default App;
