import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AdministradorRouter from './components/Admin/AdministradorRouter';
import Cliente from './components/Cliente/Cliente';
import NotFound from './components/Comunes/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <AdministradorRouter />
                </Route>
                <Route  exact path="/">
                    <Cliente />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
         </Router>
    );
}

export default App;
