import React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { IRootState } from 'app/shared/reducers';

import ResetPasswrodModal from './ResetPasswrod-modal';
import { sendPasswordCode, resetPassword } from 'app/shared/reducers/authentication';
// tslint:disable-next-line: no-duplicate-imports
import { login } from 'app/shared/reducers/authentication';
import { createUserByPhone } from 'app/requests/basic/basic.reducer';
import { toast } from 'react-toastify';

export interface IResetPasswordProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export interface IRegisterState {
  showModal: boolean;
}

export class ResetPasswrod extends React.Component<IResetPasswordProps, IRegisterState> {
  state: IRegisterState = {
    showModal: this.props.showModal
  };

  componentDidUpdate(prevProps: IResetPasswordProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ showModal: this.props.showModal });
    }
  }
  handleSendCode = phone => {
    const result = this.props.sendPasswordCode(phone);
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
  handleRegister = (phone, code, password) => {
    const result = this.props.resetPassword(phone, password, code);
    // @ts-ignore
    result.then(res => {
      if (res.value.data === '重置密码成功') {
        toast.success('重置密码成功');
        this.props.history.push('/login');
      } else {
        // tslint:disable-next-line: no-multi-spaces
        toast.error('错误：' + res.value.data.toString());
      }
    });
  };
  handleClose = () => {
    this.setState({ showModal: false });
    this.props.history.push('/');
  };

  render() {
    const { location, isAuthenticated } = this.props;
    const { from } = location.state || { from: { pathname: '/', search: location.search } };
    const { showModal } = this.state;
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <ResetPasswrodModal
        showModal={showModal}
        handleSendCode={this.handleSendCode}
        handleRegister={this.handleRegister}
        handleClose={this.handleClose}
        password=""
      />
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  showModal: authentication.showModalLogin
});

const mapDispatchToProps = { sendPasswordCode, resetPassword, login, createUserByPhone };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswrod);
