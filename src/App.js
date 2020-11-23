import React, { createContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import routes from './GlobalConfig/routes';
import NotFound from './components/Comunes/NotFound';
import { AuthProvider } from './components/Context';
function App() {
    return (
        <AuthProvider>
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
         </AuthProvider>
    );
}

export default App;
