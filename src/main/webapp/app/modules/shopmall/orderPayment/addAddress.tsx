import React from 'react';
import Title from 'app/modules/public/title';
import { Button, Col, Label, ModalBody, ModalFooter, Row } from 'reactstrap';
import { AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getAddressDetail, insertUserAddress, updateUserAddress } from 'app/requests/basic/basic.reducer';
import { toast } from 'react-toastify';
import { RouteComponentProps } from 'react-router';

export interface IAddAddressProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class AddAddress extends React.Component<IAddAddressProp> {
  state = {
    messages: [],
    userid: '',
    addressid: ''
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // @ts-ignore
    this.props.getSession().then(respone => {
      this.setState({
        userid: respone.id
      });
      // @ts-ignore
      this.props.getAddressDetail(this.props.location.state.id, respone.id).then(res => {
        if (res.value.data.code === 1) {
          this.setState({
            messages: res.value.data.data,
            // @ts-ignore
            addressid: this.props.location.state.id
          });
        }
      });
    });
  }

  handleSubmit = (event, errors, { areaid, address, consignee, isdefault, mobile }) => {
    if (this.state.addressid !== '') {
      // @ts-ignore
      this.props
        .updateUserAddress(this.props.location.state.id, areaid, this.state.userid, address, consignee, isdefault, mobile)
        // @ts-ignore
        .then(res => {
          if (res.value.data.code === 1) {
            toast.success('修改成功');
            this.props.history.push('/selectAddress', {
              productid: this.props.location.state.productid ? this.props.location.state.productid : undefined,
              cards: this.props.location.state.cards ? this.props.location.state.cards : undefined
            });
          } else {
            toast.error(res.value.data.message);
          }
        });
    } else {
      // @ts-ignore
      this.props.insertUserAddress(areaid, this.state.userid, address, consignee, isdefault, mobile).then(res => {
        if (res.value.data.code === 1) {
          toast.success('新增成功');
          this.props.history.push('/selectAddress', {
            productid: this.props.location.state.productid,
            cards: this.props.location.state.cards
          });
        } else {
          toast.error(res.value.data.message);
        }
      });
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: '#00000010',
          width: '100%',
          height: '100%',
          margin: '30px 0px 0px 0px',
          padding: '0px'
        }}
      >
        <Title
          name="地址信息"
          back="/selectAddress"
          // @ts-ignore
          productid={this.props.location.state.productid ? this.props.location.state.productid : undefined}
          // @ts-ignore
          cards={this.props.location.state.cards ? this.props.location.state.cards : undefined}
        />
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
            填写地址信息
          </div>
          <ModalBody>
            <Row>
              <Col md="12">
                <AvField
                  name="consignee"
                  // @ts-ignore
                  defaultValue={this.props.location.state.consignee}
                  label={<span style={{ float: 'left', marginTop: '7px' }}>收货人：</span>}
                  placeholder={'请填写收货人'}
                  required
                  errorMessage="收货人不能为空!"
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="mobile"
                  // @ts-ignore
                  defaultValue={this.props.location.state.mobile}
                  label={<span style={{ float: 'left', marginTop: '7px' }}>手机号码：</span>}
                  placeholder={'请填写手机号码'}
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="areaid"
                  // @ts-ignore
                  defaultValue={this.props.location.state.areaid}
                  label={<span style={{ float: 'left', marginTop: '7px' }}>所在地区：</span>}
                  placeholder={'请填写所在地区'}
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="address"
                  // @ts-ignore
                  defaultValue={this.props.location.state.address}
                  label={<span style={{ float: 'left', marginTop: '7px' }}>详细地址：</span>}
                  placeholder={'街道、楼牌号等'}
                  style={{ width: '70%', float: 'right' }}
                />
                <AvGroup check inline>
                  <Label>
                    默认地址：
                    <AvInput
                      type="checkbox"
                      name="isdefault"
                      // @ts-ignore
                      defaultValue={this.props.location.state.isdefault}
                    />
                  </Label>
                </AvGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button style={{ backgroundColor: '#fe4365', border: '1px solid #fe4365', width: '100%' }} type="submit">
              保存地址
            </Button>
          </ModalFooter>
        </AvForm>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, files }: IRootState) => ({
  filesEntity: files.entity,
  account: authentication.account
});

const mapDispatchToProps = { getSession, getAddressDetail, insertUserAddress, updateUserAddress };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAddress);
