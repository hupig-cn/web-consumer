import React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { IRootState } from 'app/shared/reducers';
import { login, send } from 'app/shared/reducers/authentication';

import RegisterModal from './register-modal';
import { sendCode, checkCode, register } from 'app/requests/result/result.reducer';

export interface ILoginProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export interface ILoginState {
  showModal: boolean;
}

export class Register extends React.Component<ILoginProps, ILoginState> {
  state: ILoginState = {
    showModal: this.props.showModal
  };

  componentDidUpdate(prevProps: ILoginProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ showModal: this.props.showModal });
    }
  }

  handleLogin = (username, password, rememberMe = false) => {
    this.props.login(username, password, rememberMe);
  };

  handleSendCode = phone => {
    const result = this.props.sendCode(phone, '1');
    // @ts-ignore
    result.then(res => {
      alert(res.value.data.message);
    });
  };
  handleRegister = (phone, password, code) => {
    const respone = this.props.checkCode(phone, '1', code);
    // @ts-ignore
    respone.then(res => {
      if (res.value.data.code === 1) {
        const info = this.props.register(phone, password);
        // @ts-ignore
        // tslint:disable-next-line: no-shadowed-variable
        info.then(res => {
          if ('注册成功' === res.value.data) {
            alert('注册成功');
            window.location.href = 'http://192.168.1.131:8082/login';
          } else {
            alert('注册失败');
          }
        });
      } else {
        alert(res.value.data.message);
      }
    });
  };
  handleClose = () => {
    this.setState({ showModal: false });
    this.props.history.push('/personal');
  };

  render() {
    const { location, isAuthenticated } = this.props;
    const { from } = location.state || { from: { pathname: '/', search: location.search } };
    const { showModal } = this.state;
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <RegisterModal
        showModal={showModal}
        handleLogin={this.handleLogin}
        handleSendCode={this.handleSendCode}
        handleRegister={this.handleRegister}
        handleClose={this.handleClose}
        loginError={this.props.loginError}
      />
    );
  }
}

const mapStateToProps = ({ authentication, result }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError,
  showModal: authentication.showModalLogin,
  resultEntity: result.entity
});

const mapDispatchToProps = { login, sendCode, checkCode, register };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
