import React from 'react';
import { connect } from 'react-redux';
import Title from 'app/modules/public/title';
import { getSession, resetPasswordByOldPassword, logout } from 'app/shared/reducers/authentication';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';

export interface IUpdatePayPassProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class UpdatePassword extends React.Component<IUpdatePayPassProp> {
  handleSubmit = (event, errors, { oldpassword, password, repassword }) => {
    if (password !== repassword) {
      toast.info('提示：两次输入的密码不一致，请检查后提交。');
    } else {
      const result = this.props.resetPasswordByOldPassword(oldpassword, password);
      // @ts-ignore
      result.then(res => {
        if (res.value.data === '修改成功') {
          toast.success('修改成功');
          this.props.history.push('/login');
        } else {
          // tslint:disable-next-line: no-multi-spaces
          toast.error('错误：' + res.value.data.toString());
        }
      });
    }
  };

  render() {
    return (
      <div>
        <Title name="修改支付密码" back="/mysettings" />
        <div
          style={{
            height: '60px',
            width: '100%',
            textAlign: 'center',
            margin: '80px 0px 20px 0px'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>验证旧密码</span>
          <p style={{ fontSize: '1.2rem' }}>请输入旧密码，以验证身份</p>
        </div>
        <AvForm onSubmit={this.handleSubmit}>
          <ModalBody>
            <div>请输入旧密码</div>
            <AvField name="oldpassword" type="password" placeholder={'请输入旧密码'} required errorMessage="旧密码不能为空!" />
            <div>请输入新密码</div>
            <AvField name="password" type="password" placeholder={'请输入新密码'} required errorMessage="新密码不能为空!" />
            <div>重复请输入新密码</div>
            <AvField name="repassword" type="password" placeholder={'请再次输入新密码'} required errorMessage="新密码不能为空!" />
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
                修改密码
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

const mapDispatchToProps = { getSession, resetPasswordByOldPassword, logout };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePassword);
