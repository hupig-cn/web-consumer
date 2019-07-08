import React from 'react';
import { Switch } from 'react-router-dom';

import Login from 'app/modules/login/login';
import Register from 'app/modules/register/register';
import Logout from 'app/modules/login/logout';
import Consumer from 'app/modules/consumer/consumer';
import Incomepage from 'app/modules/consumer/incomepage/incomepage';
import Exhibitionpage from 'app/modules/consumer/incomepage/exhibitionpage';
import Sharepage from 'app/modules/consumer/sharepage/sharepage';
import Nearby from 'app/modules/nearby/nearby';
import Information from 'app/modules/information/information';
import Personal from 'app/modules/personal/personal';
import Mydomos from 'app/modules/personal/mydemos';
import PageNotFound from 'app/shared/error/page-not-found';
import Mysettings from 'app/modules/personal/settings/mysettings';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/nearby" component={Nearby} />
      <ErrorBoundaryRoute path="/information" component={Information} />
      <ErrorBoundaryRoute path="/personal" component={Personal} />
      <ErrorBoundaryRoute path="/mydomos" component={Mydomos} />
      <ErrorBoundaryRoute path="/incomepage" component={Incomepage} />
      <ErrorBoundaryRoute path="/exhibitionpage" component={Exhibitionpage} />
      <ErrorBoundaryRoute path="/sharepage" component={Sharepage} />
      <ErrorBoundaryRoute path="/mysettings" component={Mysettings} />
      <ErrorBoundaryRoute path="/" exact component={Consumer} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
