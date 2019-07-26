import React from 'react';
import { connect } from 'react-redux';
import Title from 'app/modules/public/title';
import { getSession, sendPayPasswordCode } from 'app/shared/reducers/authentication';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Col, Label, ModalBody, ModalFooter, Row } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';

export interface IPaymentProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Payment extends React.Component<IPaymentProp> {
  state = { time: 10, btnDisable: false, btnContent: '发送验证码', backgroundColor: '#fe4365', password: '' };
  handleSubmit = (event, errors, { code }) => {
    const result = this.props.sendPayPasswordCode(code);
    // @ts-ignore
    result.then(res => {
      if (res.value.data.toString() === '发送成功') {
        toast.success('已发送。');
      } else {
        // tslint:disable-next-line: no-multi-spaces
        toast.error('错误：' + res.value.data.toString());
      }
    });
    // tslint:disable-next-line: no-console
    console.log('密码' + code);
    this.props.history.push('/payPassSetting');
  };

  handleSend = phone => {
    const result = this.props.sendPayPasswordCode(phone);
    // @ts-ignore
    result.then(res => {
      if (res.value.data.toString() === '发送成功') {
        toast.success('已发送。');
      } else {
        // tslint:disable-next-line: no-multi-spaces
        toast.error('错误：' + res.value.data.toString());
      }
    });
  };

  render() {
    // tslint:disable-next-line: one-variable-per-declaration
    let timeChange,
      ti = this.state.time;
    const clock = () => {
      if (ti > 0) {
        ti = ti - 1;
        this.setState({ time: ti, btnContent: '（' + ti + 's）' });
      } else {
        clearInterval(timeChange);
        this.setState({ btnDisable: false, time: 10, btnContent: '发送验证码', backgroundColor: '#fe4365' });
      }
    };
    const sendCode = () => {
      // @ts-ignore
      const { account } = this.props;
      if (account.login.length !== 11) {
        toast.info('提示：手机号输入有误。');
      } else {
        this.handleSend(account.login);
        this.setState({ btnDisable: true, btnContent: '（10s）', backgroundColor: '#cccccc' });
        timeChange = setInterval(clock, 1000);
      }
    };
    return (
      <div>
        <Title name="忘记支付密码" back="/payPassSeted" />
        <div
          style={{
            height: '60px',
            width: '100%',
            textAlign: 'center',
            margin: '80px 0px 20px 0px'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>发送短信验证码</span>
          <p style={{ fontSize: '1.2rem' }}>请输入支付密码，用于支付验证</p>
        </div>
        <AvForm onSubmit={this.handleSubmit}>
          <ModalBody>
            <Row>
              <Col md="12">
                <button
                  style={{
                    float: 'right',
                    backgroundColor: this.state.backgroundColor,
                    color: '#fffde5',
                    borderRadius: '0.25rem',
                    border: '0px',
                    width: '40%',
                    marginTop: '30px',
                    height: '40px'
                  }}
                  onClick={sendCode}
                  type="button"
                  disabled={this.state.btnDisable}
                >
                  {this.state.btnContent}
                </button>
                <AvField
                  name="code"
                  label={'验证码'}
                  placeholder={'请输入验证码'}
                  required
                  errorMessage="验证码不能为空!"
                  autoFocus
                  style={{ width: '55%' }}
                />
              </Col>
            </Row>
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
                下一步
              </button>
            </div>
          </ModalFooter>
        </AvForm>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, sendPayPasswordCode };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);
