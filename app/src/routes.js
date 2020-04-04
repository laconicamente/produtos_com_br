import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Product from './pages/Product';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" >
            <Main />
            </Route>
            <Route path="/products/:id" component={Product} />
        </Switch>
    </Router>
);

export default Routes;