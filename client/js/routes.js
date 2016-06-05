import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Apiary from './containers/Apiary';
import Profile from './containers/Profile';
import Hive from './containers/Hive';
import CreateApiary from './containers/CreateApiary';
import CreateHive from './containers/CreateHive';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/apiaries" component={Dashboard} />
    <Route path="/apiary/:id" component={Apiary} />
    <Route path="/hive/:id" component={Hive} />
    <Route path="/profile" component={Profile} />
    <Route path="/create/apiary" component={CreateApiary} />
    <Route path="/create/hive" component={CreateHive} />
  </Route>
);

export default routes;
