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

class LoginModal extends React.Component<ILoginModalProps> {
  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    const { handleLogin } = this.props;
    handleLogin(username, password, rememberMe);
  };

  render() {
    const { loginError, handleClose } = this.props;
    return (
      // @ts-ignore
      <Modal isOpen={this.props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader
            id="login-title"
            // @ts-ignore
            toggle={handleClose}
          >
            <Translate contentKey="login.title">Sign in</Translate>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                {loginError ? (
                  <Alert color="danger">
                    <Translate contentKey="login.messages.error.authentication">
                      <strong>Failed to sign in!</strong> Please check your credentials and try again.
                    </Translate>
                  </Alert>
                ) : null}
              </Col>
              <Col md="12">
                <AvField name="username" label={'手机号'} placeholder={'请输入手机号'} errorMessage="手机号不能为空!" autoFocus />
                <AvField name="password" type="password" label={'密码'} placeholder={'请输入密码'} required errorMessage="密码不能为空!" />
                <AvGroup check inline>
                  <Label className="form-check-label">
                    <AvInput type="checkbox" name="rememberMe" /> <Translate contentKey="login.form.rememberme">Remember me</Translate>
                  </Label>
                </AvGroup>
                <AvGroup check inline style={{ float: 'right' }}>
                  <Label className="form-check-label">
                    <span>
                      <Link to={'/register'} className="alert-link" style={{ color: '#fe4365', textDecoration: 'underline' }}>
                        注册账户
                      </Link>
                    </span>
                  </Label>
                </AvGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              style={{ width: '50%' }}
              // @ts-ignore
              onClick={handleClose}
              tabIndex="1"
            >
              取消
            </Button>{' '}
            <Button style={{ backgroundColor: '#fe4365', border: '1px solid #fe4365', width: '50%' }} type="submit">
              登录
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default LoginModal;
