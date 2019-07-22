import React from 'react';
import Title from 'app/modules/public/title';
import { Button, Col, Label, ModalBody, ModalFooter, Row } from 'reactstrap';
import { setFileData } from 'react-jhipster';
import { AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getAddressDetail, updateUserAddress } from 'app/requests/basic/basic.reducer';

export interface IAddAddressProp extends StateProps, DispatchProps {}

export class AddAddress extends React.Component<IAddAddressProp> {
  state = {
    messages: [],
    userid: ''
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // @ts-ignore
    this.props.getSession().then(respone => {
      // @ts-ignore
      this.props.getAddressDetail(this.props.location.id, respone.id).then(res => {
        this.setState({
          messages: res.value.data.data,
          userid: respone.id
        });
      });
    });
  }
  handleSubmit = (id, areaid, userid, address, consignee, isdefault, mobile) => {
    this.props.updateUserAddress(id, areaid, userid, address, consignee, isdefault, mobile);
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
        <Title name="新增地址" back="/selectAddress" />
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
                  name="title"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>收货人：</span>}
                  placeholder={'请填写收货人'}
                  required
                  errorMessage="收货人不能为空!"
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="name"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>手机号码：</span>}
                  placeholder={'请填写手机号码'}
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="name"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>所在地区：</span>}
                  placeholder={'请填写所在地区'}
                  style={{ width: '70%', float: 'right' }}
                />
                <AvField
                  name="name"
                  label={<span style={{ float: 'left', marginTop: '7px' }}>详细地址：</span>}
                  placeholder={'街道、楼牌号等'}
                  style={{ width: '70%', float: 'right' }}
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button style={{ backgroundColor: '#fe4365', border: '1px solid #fe4365', width: '100%' }} type="submit">
              提交反馈
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

const mapDispatchToProps = { getSession, getAddressDetail, updateUserAddress };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAddress);
