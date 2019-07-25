import React from 'react';
import initStore from 'app/config/store';
import { registerLocale } from 'app/config/translation';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Title from 'app/modules/public/title';

export default function complete() {
  const store = initStore();
  registerLocale(store);

  return (
    <div>
      <Title name="支付成功" back="/payment" />
      <div
        style={{
          backgroundColor: 'rgba(255,253,229,0)',
          height: '80px',
          textAlign: 'center',
          padding: '17px',
          width: '100%',
          position: 'fixed',
          top: '140px',
          zIndex: 1000
        }}
      >
        <img src="./content/images/success.png" />
        <h4>恭喜你支付成功</h4>
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '17px',
          width: '100%',
          position: 'fixed',
          top: '400px',
          zIndex: 1000
        }}
      >
        <button
          type="button"
          style={{
            backgroundColor: '#fe4365',
            width: '80%',
            border: 'none',
            color: 'white',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            marginTop: '5px',
            height: '45px',
            borderRadius: '4px'
          }}
          // tslint:disable-next-line: jsx-no-lambda
          onClick={() => {
            document.getElementById('app-modules-consumer-quickaccess-button-link-shopCar').click();
          }}
        >
          查看订单详情
        </button>
      </div>
      <div style={{ height: '40px' }} />
      <Link id="app-modules-consumer-quickaccess-button-link-shopCar" to="/shopCar" />
    </div>
  );
}
