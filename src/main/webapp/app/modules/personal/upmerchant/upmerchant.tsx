import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Label, ModalBody, ModalFooter, Row } from 'reactstrap';
import { AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { IRootState } from 'app/shared/reducers';
import { createMyEntityMerchant } from 'app/requests/merchant/merchant.reducer';
import { RouteComponentProps } from 'react-router';
import Title from './title';

export interface IUpmerchantProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Upmerchant extends React.Component<IUpmerchantProps> {
  componentDidUpdate(prevProps: IUpmerchantProps, prevState) {}

  handleSubmit = (event, errors, { phone, code, password, repassword, agreement }) => {
    this.props.createMyEntityMerchant();
  };

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <Title />
        <AvForm onSubmit={this.handleSubmit}>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '10px',
              fontSize: '1.2rem',
              borderBottom: '1px solid #00000015',
              marginTop: '35px'
            }}
          >
            入驻申请表
          </div>
          <ModalBody>
            <Row>
              <Col md="12">
                <div style={{ width: '100%', height: '100px' }}>
                  <button
                    style={{
                      float: 'right',
                      backgroundColor: '#fe4365',
                      color: '#fffde5',
                      borderRadius: '0.25rem',
                      border: '0px',
                      width: '50%',
                      marginTop: '45px',
                      height: '40px'
                    }}
                    type="button"
                  >
                    上传门店头像
                  </button>
                  <img
                    src=""
                    style={{
                      width: '85px',
                      height: '85px',
                      float: 'left',
                      marginLeft: '5%'
                    }}
                  />
                </div>
                <AvField
                  name="name"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>商户名称：</span>}
                  placeholder={'请输入店名'}
                  required
                  errorMessage="店铺名称不能为空!"
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="businessid"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>经营类型：</span>}
                  placeholder={'请输入经营类型'}
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="address"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>详细地址：</span>}
                  placeholder={'请输入店铺地址'}
                  required
                  errorMessage="店铺地址不能为空!"
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="share"
                  type="password"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>省：</span>}
                  placeholder={'name'}
                  required
                  readonly
                  disabled
                  errorMessage=" "
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
            <Button style={{ backgroundColor: '#fe4365', border: '1px solid #fe4365', width: '100%' }} type="submit">
              提交申请
            </Button>
          </ModalFooter>
        </AvForm>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { createMyEntityMerchant };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upmerchant);
