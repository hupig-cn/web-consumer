import React from 'react';
import { connect } from 'react-redux';
import Title from 'app/modules/public/title';
import { getSession } from 'app/shared/reducers/authentication';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';

export interface IPaymentProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Payment extends React.Component<IPaymentProp> {
  handleSubmit = (event, errors, { password, consignee }) => {
    // tslint:disable-next-line: no-console
    console.log('密码' + password);
    this.props.history.push('/payPassSeted');
    toast.success('提示：修改成功。');
  };

  render() {
    return (
      <div>
        <Title name="忘记支付密码" back="/sendCodePayPass" />
        <div
          style={{
            height: '60px',
            width: '100%',
            textAlign: 'center',
            margin: '80px 0px 20px 0px'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>设置支付密码</span>
          <p style={{ fontSize: '1.2rem' }}>请输入支付密码，用于支付验证</p>
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
                确认修改
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
