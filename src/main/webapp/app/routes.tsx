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
import PageNotFound from 'app/shared/error/page-not-found';
import Mysettings from 'app/modules/personal/settings/mysettings';
import Reimageurl from 'app/modules/personal/settings/reimageurl';
import Authentication from 'app/modules/personal/settings/authentication';
import Upmerchant from 'app/modules/personal/upmerchant/upmerchant';
import Feedback from 'app/modules/personal/feedback/feedback';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import Productdetail from 'app/modules/shopmall/productDetail/productdetail';
import CreateOrder from 'app/modules/shopmall/orderPayment/createOrder';
import SelectAddress from 'app/modules/shopmall/orderPayment/selectAddress';
import AddAddress from 'app/modules/shopmall/orderPayment/addAddress';
import SelectPayway from 'app/modules/shopmall/orderPayment/selectPayWay';
import Payment from 'app/modules/shopmall/orderPayment/payment';
import Complete from 'app/modules/shopmall/orderPayment/complete';
import ShopCar from 'app/modules/shopmall/shopCar/shopCar';
import PayPassSeted from 'app/modules/shopmall/payPassword/payPassSeted';
import UpdatePayPass from 'app/modules/shopmall/payPassword/updatePayPass';
import SetNewPayPass from 'app/modules/shopmall/payPassword/setNewPayPass';
import SendCodePayPass from 'app/modules/shopmall/payPassword/sendCodePayPass';
import PayPassSetting from 'app/modules/shopmall/payPassword/payPassSetting';
import FirstSetPayPass from 'app/modules/shopmall/payPassword/firstSetPayPass';
import Order from 'app/modules/shopmall/orderList/order';
import OrderDetail from 'app/modules/shopmall/orderDetail/orderdetail';
import Aboutus from 'app/modules/public/aboutus';
import Binding from 'app/modules/personal/settings/binding';
const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/register" component={Register} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/nearby" component={Nearby} />
      <ErrorBoundaryRoute path="/information" component={Information} />
      <ErrorBoundaryRoute path="/personal" component={Personal} />
      <ErrorBoundaryRoute path="/incomepage" component={Incomepage} />
      <ErrorBoundaryRoute path="/exhibitionpage" component={Exhibitionpage} />
      <ErrorBoundaryRoute path="/sharepage" component={Sharepage} />
      <ErrorBoundaryRoute path="/mysettings" component={Mysettings} />
      <ErrorBoundaryRoute path="/reimageurl" component={Reimageurl} />
      <ErrorBoundaryRoute path="/authentication" component={Authentication} />
      <ErrorBoundaryRoute path="/upmerchant" component={Upmerchant} />
      <ErrorBoundaryRoute path="/feedback" component={Feedback} />
      <ErrorBoundaryRoute path="/productdetail" component={Productdetail} />
      <ErrorBoundaryRoute path="/createOrder" component={CreateOrder} />
      <ErrorBoundaryRoute path="/addAddress" component={AddAddress} />
      <ErrorBoundaryRoute path="/selectAddress" component={SelectAddress} />
      <ErrorBoundaryRoute path="/selectpayway" component={SelectPayway} />
      <ErrorBoundaryRoute path="/payment" component={Payment} />
      <ErrorBoundaryRoute path="/complete" component={Complete} />
      <ErrorBoundaryRoute path="/shopCar" component={ShopCar} />
      <ErrorBoundaryRoute path="/payPassSeted" component={PayPassSeted} />
      <ErrorBoundaryRoute path="/updatePayPass" component={UpdatePayPass} />
      <ErrorBoundaryRoute path="/setNewPayPass" component={SetNewPayPass} />
      <ErrorBoundaryRoute path="/sendCodePayPass" component={SendCodePayPass} />
      <ErrorBoundaryRoute path="/payPassSetting" component={PayPassSetting} />
      <ErrorBoundaryRoute path="/firstSetPayPass" component={FirstSetPayPass} />
      <ErrorBoundaryRoute path="/order" component={Order} />
      <ErrorBoundaryRoute path="/orderdetail" component={OrderDetail} />
      <ErrorBoundaryRoute path="/aboutus" component={Aboutus} />
      <ErrorBoundaryRoute path="/binding" component={Binding} />
      <ErrorBoundaryRoute path="/" exact component={Consumer} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
