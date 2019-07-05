import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { toast } from 'react-toastify';

export interface ILoginModalProps {
  showModal: boolean;
  handleSendCode: Function;
  handleClose: Function;
  handleRegister: Function;
}

class RegisterModal extends React.Component<ILoginModalProps> {
  state = { time: 60, btnDisable: false, btnContent: '发送验证码', backgroundColor: '#fe4365' };
  handleSubmit = (event, errors, { phone, code, password, repassword, agreement }) => {
    if (!agreement) {
      toast.error('提示：请先阅读并同意《用户协议》。');
    } else if (password != repassword) {
      toast.error('提示：两次输入的密码不一致，请检查后提交。');
    } else if (phone.length != 11) {
      toast.error('提示：手机号输入有误。');
    } else if (code.length != 6) {
      toast.error('提示：验证码输入错误。');
    } else {
      const { handleRegister } = this.props;
      handleRegister(phone, code, password, repassword, agreement);
    }
  };
  handleSend = phone => {
    const { handleSendCode } = this.props;
    handleSendCode(phone);
  };

  render() {
    const { handleClose } = this.props;
    let timeChange,
      ti = this.state.time;
    const clock = () => {
      if (ti > 0) {
        ti = ti - 1;
        this.setState({ time: ti, btnContent: '（' + ti + 's）' });
      } else {
        clearInterval(timeChange);
        this.setState({ btnDisable: false, time: 60, btnContent: '发送验证码', backgroundColor: '#fe4365' });
      }
    };
    const sendCode = () => {
      // @ts-ignore
      const phone = document.getElementById('register-phone').value;
      if (phone.length != 11) {
        toast.error('提示：手机号输入有误。');
      } else {
        this.handleSend(phone);
        this.setState({ btnDisable: true, btnContent: '（60s）', backgroundColor: '#cccccc' });
        timeChange = setInterval(clock, 1000);
      }
    };
    return (
      <Modal isOpen={this.props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader id="login-title" toggle={handleClose}>
            <span>注册</span>
          </ModalHeader>
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
                  name="phone"
                  id="register-phone"
                  label={'手机号'}
                  placeholder={'请输入手机号'}
                  required
                  errorMessage="手机号不能为空!"
                  autoFocus
                  style={{ width: '55%' }}
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
                    <AvInput type="checkbox" name="agreement" />
                    我已阅读并同意<u>《用户协议》</u>
                  </Label>
                </AvGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button style={{ width: '50%' }} onClick={handleClose} tabIndex="1">
              取消
            </Button>{' '}
            <Button style={{ backgroundColor: '#fe4365', border: '1px solid #fe4365', width: '50%' }} type="submit">
              注册
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default RegisterModal;
