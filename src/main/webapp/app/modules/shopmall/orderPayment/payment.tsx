import React from 'react';
import { connect } from 'react-redux';
import Title from 'app/modules/public/title';
import { getSession } from 'app/shared/reducers/authentication';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';

export interface IPaymentProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Payment extends React.Component<IPaymentProp> {
  handleSubmit = (event, errors, { password, consignee }) => {
    // tslint:disable-next-line: no-console
    console.log('密码' + password);
    this.props.history.push('/complete');
  };

  render() {
    return (
      <div>
        <Title name="支付页面" back="/selectPayWay" />
        <div
          style={{
            height: '60px',
            width: '100%',
            textAlign: 'center',
            margin: '80px 0px 20px 0px'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>支付密码</span>
          <p style={{ fontSize: '1.2rem' }}>请输入支付密码，以验证身份</p>
        </div>
        <AvForm onSubmit={this.handleSubmit}>
          <ModalBody>
            <div
              style={{
                height: '200px',
                width: '50%',
                margin: '0 auto',
                marginTop: '0.5rem',
                boxSizing: 'border-box',
                display: 'flex'
              }}
            >
              {/*<div className="show">*/}
              {/*  <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />*/}
              {/*  <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />*/}
              {/*  <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />*/}
              {/*  <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />*/}
              {/*  <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />*/}
              {/*  <input type="password" style={{ float: 'left', width: '12vw' }} maxLength={1} defaultValue={null} />*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*  <Password id="password" name="password" />*/}
              {/*</div>*/}
              <AvField name="password" type="password" placeholder={'请输入密码'} required errorMessage="密码不能为空!" />
            </div>
          </ModalBody>
          <ModalFooter>
            <div style={{ minHeight: '50px' }}>
              <button
                type="submit"
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
              >
                确认支付
              </button>
            </div>
          </ModalFooter>
        </AvForm>
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
