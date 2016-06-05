import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';

const routes = (
  <Route path="/dashboard" component={App}>
    <IndexRoute component={Dashboard} />
  </Route>
);

export default routes;
