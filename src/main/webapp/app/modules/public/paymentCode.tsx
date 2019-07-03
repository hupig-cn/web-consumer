import React from 'react';
import initStore from 'app/config/store';
import { registerLocale } from 'app/config/translation';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

export default function paymentCode() {
  const store = initStore();
  registerLocale(store);

  const rootEl = document.getElementById('root');

  const render = Component =>
    ReactDOM.render(
      <Provider store={store}>
        <Component />
      </Provider>,
      rootEl
    );

  function goBack() {
    history.go(0);
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: '#fe4365',
          height: '15%',
          textAlign: 'center',
          padding: '7px',
          width: '100%',
          position: 'fixed',
          top: '0px',
          zIndex: 1000
        }}
      >
        <span onClick={goBack} style={{ float: 'left' }}>
          <img
            src="./content/images/back.png"
            style={{
              width: '24px',
              height: '24px'
            }}
          />
        </span>
        <h5
          style={{
            color: '#fffde5',
            marginTop: '50px',
            fontSize: '30px'
          }}
        >
          欢迎使用收款码
        </h5>
      </div>
      <div
        style={{
          backgroundColor: 'rgba(255,253,229,0)',
          height: '80%',
          textAlign: 'center',
          padding: '17px',
          width: '100%',
          position: 'fixed',
          top: '200px',
          zIndex: 1000
        }}
      >
        <img src="./content/images/erweima.png" />
        <h4>支付宝、微信、财付通、QQ钱包、云闪付、银行卡、信用卡、园积分等方式付款</h4>
      </div>
      <div
        style={{
          backgroundColor: '#fe4365',
          height: '5%',
          width: '100%',
          position: 'fixed',
          bottom: '0px'
        }}
      >
        <h4>66</h4>
      </div>
      <div style={{ height: '40px' }} />
    </div>
  );
}
