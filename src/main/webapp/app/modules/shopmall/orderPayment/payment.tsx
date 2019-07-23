import './keyboard.scss';
import React from 'react';
import { connect } from 'react-redux';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import 'react-input-groups/lib/css/styles.css';
import { getSession } from 'app/shared/reducers/authentication';
import { Link } from 'react-router-dom';

export interface IPaymentProp extends StateProps, DispatchProps {}

export class Payment extends React.Component<IPaymentProp> {
  render() {
    return (
      <div>
        <Title name="支付页面" back="/selectPayWay" />
        <div
          style={{
            height: '200px',
            width: '100%',
            textAlign: 'center',
            margin: '80px 0px 20px 0px'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>支付密码</span>
          <p style={{ fontSize: '1.2rem' }}>请输入支付密码，以验证身份</p>
        </div>
        <div
          style={{
            height: '300px',
            width: '72%',
            margin: '0 auto',
            marginTop: '0.5rem',
            boxSizing: 'border-box',
            display: 'flex'
          }}
        >
          <div className="show">
            <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />
            <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />
            <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />
            <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />
            <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />
            <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />
          </div>
          <div style={{ minHeight: '80px' }}>
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
                borderRadius: '4px',
                bottom: '2%',
                left: '10%',
                position: 'absolute'
              }}
              // tslint:disable-next-line: jsx-no-lambda
              onClick={() => {
                document.getElementById('app-modules-consumer-quickaccess-button-link-complete').click();
              }}
            >
              确认支付
            </button>
          </div>
        </div>
        <Link id="app-modules-consumer-quickaccess-button-link-complete" to="/complete" />
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);
