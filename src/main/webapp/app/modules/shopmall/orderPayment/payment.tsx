import React from 'react';
import { connect } from 'react-redux';
import Title from 'app/modules/public/title';
import { getSession, passwordCheck } from 'app/shared/reducers/authentication';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { yuePay, integralPay, couponPay } from 'app/requests/basic/result.reducer';
import { bigorder } from 'app/modules/shopmall/orderPayment/createOrder';
import { toast } from 'react-toastify';

export interface IPaymentProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Payment extends React.Component<IPaymentProp> {
  handleSubmit = (event, errors, { password }) => {
    const paymethod = this.props.location.paymethod;
    if (paymethod === 'yue') {
      const result = this.props.yuePay(this.props.location.bigorder, password, null, 50);
      // @ts-ignore
      result.then(res => {
        // tslint:disable-next-line: no-console
        console.log(res);
        // tslint:disable-next-line: no-console
        console.log(res.value.data);
        if (res.value.data.code === 1) {
          this.props.history.push('/complete');
        } else {
          toast.error('错误：' + res.value.data.message.toString());
        }
      });
    } else if (paymethod === 'jifen') {
      const result = this.props.integralPay(this.props.location.bigorder, password, null);
      // @ts-ignore
      result.then(res => {
        // tslint:disable-next-line: no-console
        console.log(res);
        // tslint:disable-next-line: no-console
        console.log(res.value.data);
        if (res.value.data.code === 1) {
          this.props.history.push('/complete');
        } else {
          toast.error('错误：' + res.value.data.message.toString());
        }
      });
    } else if (paymethod === 'coupon') {
      const result = this.props.couponPay(this.props.location.bigorder, password, null);
      // @ts-ignore
      result.then(res => {
        // tslint:disable-next-line: no-console
        console.log(res);
        // tslint:disable-next-line: no-console
        console.log(res.value.data);
        if (res.value.data.code === 1) {
          this.props.history.push('/complete');
        } else {
          toast.error('错误：' + res.value.data.message.toString());
        }
      });
    } else {
      toast.error('错误：支付方式异常');
    }
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

const mapDispatchToProps = { getSession, yuePay, passwordCheck, integralPay, couponPay };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);
