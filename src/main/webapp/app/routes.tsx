import React from 'react';
import { Switch } from 'react-router-dom';

import Login from 'app/modules/login/login';
import Register from 'app/modules/register/register';
import Logout from 'app/modules/login/logout';
// import Consumer from 'app/modules/consumer/consumer';
import Mydemos from 'app/modules/consumer/mydemos';
import Nearby from 'app/modules/nearby/nearby';
import Information from 'app/modules/information/information';
import Personal from 'app/modules/personal/personal';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/nearby" component={Nearby} />
      <ErrorBoundaryRoute path="/information" component={Information} />
      <ErrorBoundaryRoute path="/personal" component={Personal} />
      <ErrorBoundaryRoute path="/" exact component={Mydemos} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
