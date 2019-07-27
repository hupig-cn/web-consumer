import React from 'react';
import { connect } from 'react-redux';
import Title from 'app/modules/public/title';
import { getSession, checkOldPassword } from 'app/shared/reducers/authentication';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';

export interface IUpdatePayPassProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class UpdatePayPass extends React.Component<IUpdatePayPassProp> {
  handleSubmit = (event, errors, { password }) => {
    const result = this.props.checkOldPassword(password);
    // @ts-ignore
    result.then(res => {
      if (res.value.data.code === 1) {
        this.props.history.push('/setNewPayPass', { password });
      } else {
        // tslint:disable-next-line: no-multi-spaces
        toast.error('错误：' + res.value.data.message.toString());
      }
    });
  };

  render() {
    return (
      <div>
        <Title name="修改支付密码" back="/payPassSeted" />
        <div
          style={{
            height: '60px',
            width: '100%',
            textAlign: 'center',
            margin: '80px 0px 20px 0px'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>验证旧密码</span>
          <p style={{ fontSize: '1.2rem' }}>请输入旧支付密码，以验证身份</p>
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

const mapDispatchToProps = { getSession, checkOldPassword };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePayPass);
