import React from 'react';
import { Translate, translate } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Alert, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: Function;
  handleClose: Function;
}

class RegisterModal extends React.Component<ILoginModalProps> {
  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    const { handleLogin } = this.props;
    handleLogin(username, password, rememberMe);
  };

  render() {
    const { loginError, handleClose } = this.props;

    return (
      <Modal isOpen={this.props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader id="login-title" toggle={handleClose}>
            <span>注册</span>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                {loginError ? (
                  <Alert color="danger">
                    <span>操作失败，请正确输入注册信息.</span>
                  </Alert>
                ) : null}
              </Col>
              <Col md="12">
                <button
                  style={{
                    float: 'right',
                    backgroundColor: '#fe4365',
                    color: '#fffde5',
                    borderRadius: '0.25rem',
                    border: '1px solid #fe4365',
                    width: '40%',
                    marginTop: '30px',
                    height: '40px'
                  }}
                >
                  发送验证码
                </button>
                <AvField
                  name="username"
                  label={'手机号'}
                  placeholder={'请输入手机号'}
                  required
                  errorMessage="用户名不能为空!"
                  autoFocus
                  style={{
                    width: '55%'
                  }}
                />
                <AvField
                  name="code"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>验证码：</span>}
                  placeholder={'请输入验证码'}
                  required
                  errorMessage="验证码不能为空!"
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="password"
                  type="password"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>密码：</span>}
                  placeholder={'请输入密码'}
                  required
                  errorMessage="密码不能为空!"
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="repassword"
                  type="password"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>重复密码：</span>}
                  placeholder={'请重复输入密码'}
                  required
                  errorMessage="重复密码不能为空!"
                  style={{ width: '70%', float: 'right' }}
                />
                <AvGroup check inline>
                  <Label className="form-check-label">
                    <AvInput type="checkbox" name="rememberMe" />
                    我已阅读并同意《用户协议》
                  </Label>
                </AvGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              style={{
                width: '50%'
              }}
              onClick={handleClose}
              tabIndex="1"
            >
              <Translate contentKey="entity.action.cancel">Cancel</Translate>
            </Button>{' '}
            <Button
              style={{
                backgroundColor: '#fe4365',
                border: '1px solid #fe4365',
                width: '50%'
              }}
              type="submit"
            >
              注册
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default RegisterModal;
