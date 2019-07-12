import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Label, ModalBody, ModalFooter, Row } from 'reactstrap';
import { AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { IRootState } from 'app/shared/reducers';
import { RouteComponentProps } from 'react-router';
import Title from './title';
import { createMyEntityMerchant, getMyEntityMerchant } from 'app/requests/merchant/merchant.reducer';
import { getBusinessEntities } from 'app/requests/merchant/business.reducer';
import { setBlob,createFile } from 'app/requests/basic/files.reducer';
import { setFileData, openFile, byteSize } from 'react-jhipster';
import { toast } from 'react-toastify';
import { getSession } from "app/shared/reducers/authentication";
import Info from 'app/modules/public/info';

export interface IUpmerchantProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

const concession = [
  {
    key: 1,
    value: 5
  },
  {
    key: 2,
    value: 10
  },
  {
    key: 3,
    value: 15
  }
];
const testdata = [
  {
    key: 1,
    value: '测试假数据1'
  },
  {
    key: 2,
    value: '测试假数据2'
  },
  {
    key: 3,
    value: '测试假数据3'
  }
];

export class Upmerchant extends React.Component<IUpmerchantProps> {
  componentDidMount() {
    this.props.getSession();
    this.props.getBusinessEntities();
    this.props.getMyEntityMerchant(this.props.account.id);
  }

  handleSubmit = (event, errors, { shopphoto, creditcode, name, credit, businessid, province, city, county, address, concession, agreement }) => {
    if (!agreement) {
      toast.info('提示：请先阅读并同意《用户协议》。');
    } else if (shopphoto.length < 1) {
      toast.info('提示：请上传照片。');
    } else if (shopphoto.length > 8000000) {
      toast.info('提示：门店照片文件过大，请上传6M以内的文件。');
    } else if (creditcode.length > 8000000) {
      toast.info('提示：营业执照文件过大，请上传6M以内的文件。');
    } else if (name.trim().length < 1) {
      toast.info('提示：商户名不能为空。');
    } else if (businessid.length < 1) {
      toast.info('提示：请选择经营类型。');
    } else if (province.length < 1) {
      toast.info('提示：所在省不能为空。');
    } else if (city.length < 1) {
      toast.info('提示：所在市不能为空。');
    } else if (county.length < 1) {
      toast.info('提示：所在县不能为空。');
    } else if (address.trim().length < 1) {
      toast.info('提示：请填写详细地址。');
    } else if (concession.length < 1) {
      toast.info('提示：请选择让利比。');
    } else {
      this.onApply(shopphoto, creditcode, name, credit, businessid, province, city, county, address, concession);
    }
  };

  onApply = (shopphoto, creditcode, name, credit, businessid, province, city, county, address, concession ) => {
    const fileid = this.props.createFile(this.props.account.id,shopphoto.length,shopphoto,this.props.filesEntity.fileIContentType);
    // @ts-ignore
    fileid.then((result) => {
      if (!isNaN(result)){
        // if (creditcode.length>0){
        //   const fileidII = this.props.createFile(this.props.account.id,creditcode.length,creditcode,this.props.filesEntity.fileIIContentType);
        //   fileidII.then(function (resultII) {
        //     if (!isNaN(resultII)){
        //
        //     }else{
        //       toast.info('提示：营业执照上传失败。');
        //     }
        //   })
        // }else{
        this.props.createMyEntityMerchant(this.props.account.id,result,name,businessid,address,province,city,county,0,0,concession)
        // @ts-ignore
          .then((result) => {
            if (!isNaN(result.value.data)){
              toast.success('提示：申请成功，请等待审核。');
              this.props.history.push('/')
            }else{
              toast.error('提示：'+ result.value.data);
            }
          });
        // this.createMerchants(result, name, businessid, province, city, county, address, concession);
        // }
      }else{
        toast.info('提示：店铺照片上传失败。');
      }
    });
  };

  // createMerchants = (shopphoto, name, businessid, province, city, county, address, concession) => {
  //   this.props.createMyEntityMerchant(this.props.account.id,shopphoto,name,businessid,address,province,city,county,0,0,concession);
  // };

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  uptitlephotoshop = () => {
    document.getElementById('upmerchant-upmerchant-uploadphoto-shop').click();
  };
  uptitlephotocode = () => {
    document.getElementById('upmerchant-upmerchant-uploadphoto-code').click();
  };

  render() {
    const { account, merchantEntity,businesss,filesEntity } = this.props;
    const { fileI, fileIContentType, fileII, fileIIContentType, } = filesEntity;
    return (
      <div>
        {merchantEntity.id > 0 && account.id == merchantEntity.userid ?(<div>
          {merchantEntity.state == '待审核'?(
            <Info />
          ):(
            <div>
              审核通过，跳转商家页面
            </div>
          )}
        </div>):(
          <div style={{ textAlign: 'left' }}>
            <Title/>
            <AvForm onSubmit={this.handleSubmit}>
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px',
                  fontSize: '1.2rem',
                  borderBottom: '1px solid #00000015',
                  marginTop: '35px'
                }}>
                入驻申请表
              </div>
              <ModalBody>
                <Row>
                  <Col md="12">
                    <div style={{
                      width: '100%', height: 'auto',
                      overflow: 'hidden',
                      marginBottom: '10px'
                    }}>
                      <AvGroup>
                        <AvGroup>
                          <button
                            style={{
                              float: 'left',
                              backgroundColor: '#fe4365',
                              color: '#fffde5',
                              borderRadius: '0.25rem',
                              border: '0px',
                              width: '45%',
                              height: '40px',
                              margin: '0px 0px 10px 0px'
                            }}
                            type="button"
                            onClick={this.uptitlephotoshop}
                          >
                            上传门店照片
                          </button>
                          <input style={{ display: 'none' }} id="upmerchant-upmerchant-uploadphoto-shop" type="file"
                                 onChange={this.onBlobChange(true, 'fileI')} accept="image/*"/>
                          <AvInput type="hidden" name="shopphoto" value={fileI}/>
                          {fileI ? (
                            <div>
                          <span style={{ float: 'right', width: '50%', height: '100%' }}>
                            <img src={`data:${fileIContentType};base64,${fileI}`}
                                 style={{ maxHeight: '100%', width: '100%', minHeight: '50px' }}/>
                          </span>
                              <span style={{ float: 'left' }}>
                          <Row>
                            <Col md="11">
                            <span>
                              {fileIContentType}<br/>
                              {byteSize(fileI)}
                            </span>
                            </Col>
                          </Row>
                          </span>
                            </div>
                          ) : null}
                        </AvGroup>
                      </AvGroup>
                    </div>
                    <div style={{
                      width: '100%', height: 'auto',
                      overflow: 'hidden',
                      marginBottom: '10px'
                    }}>
                      <AvGroup>
                        <AvGroup>
                          <button
                            style={{
                              float: 'left',
                              backgroundColor: '#fe4365',
                              color: '#fffde5',
                              borderRadius: '0.25rem',
                              border: '0px',
                              width: '45%',
                              height: '40px',
                              margin: '0px 0px 10px 0px'
                            }}
                            type="button"
                            onClick={this.uptitlephotocode}
                          >
                            上传营业执照
                          </button>
                          <input style={{ display: 'none' }} id="upmerchant-upmerchant-uploadphoto-code" type="file"
                                 onChange={this.onBlobChange(true, 'fileII')} accept="image/*"/>
                          <AvInput type="hidden" name="creditcode" value={fileII}/>
                          {fileII ? (
                            <div>
                          <span style={{ float: 'right', width: '50%', height: '100%' }}>
                            <img src={`data:${fileIIContentType};base64,${fileII}`}
                                 style={{ maxHeight: '100%', width: '100%', minHeight: '50px' }}/>
                          </span>
                              <span style={{ float: 'left' }}>
                          <Row>
                            <Col md="11">
                            <span>
                              {fileIIContentType}<br/>
                              {byteSize(fileII)}
                            </span>
                            </Col>
                          </Row>
                          </span>
                            </div>
                          ) : null}
                        </AvGroup>
                      </AvGroup>
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
                      name="credit"
                      label={<span style={{ float: 'left', marginTop: '7px' }}>信用代码：</span>}
                      placeholder={'统一社会信用代码'}
                      style={{ width: '70%', float: 'right' }}
                    />
                    <AvGroup>
                      <Label for="country-region">
                        <span style={{ float: 'left', marginTop: '7px' }}>经营类型：</span>
                      </Label>
                      <span style={{ width: '70%', float: 'right' }}>
                  <AvInput id="country-region" type="select" className="form-control" name="businessid">
                    <option value="" key="0"/>
                    {businesss
                      ? businesss.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                      : null}
                  </AvInput>
                  </span>
                    </AvGroup>
                    <AvGroup>
                      <Label for="country-region">
                        <span style={{ float: 'left', marginTop: '7px' }}>所在省：</span>
                      </Label>
                      <span style={{ width: '70%', float: 'right' }}>
                  <AvInput id="country-region" type="select" className="form-control" name="province">
                    <option value="" key="0"/>
                    {testdata
                      ? testdata.map(otherEntity => (
                        <option value={otherEntity.value} key={otherEntity.value}>
                          {otherEntity.value}
                        </option>
                      ))
                      : null}
                  </AvInput>
                  </span>
                    </AvGroup>
                    <AvGroup>
                      <Label for="country-region">
                        <span style={{ float: 'left', marginTop: '7px' }}>所在市：</span>
                      </Label>
                      <span style={{ width: '70%', float: 'right' }}>
                  <AvInput id="country-region" type="select" className="form-control" name="city">
                    <option value="" key="0"/>
                    {testdata
                      ? testdata.map(otherEntity => (
                        <option value={otherEntity.value} key={otherEntity.value}>
                          {otherEntity.value}
                        </option>
                      ))
                      : null}
                  </AvInput>
                  </span>
                    </AvGroup>
                    <AvGroup>
                      <Label for="country-region">
                        <span style={{ float: 'left', marginTop: '7px' }}>所在县：</span>
                      </Label>
                      <span style={{ width: '70%', float: 'right' }}>
                  <AvInput id="country-region" type="select" className="form-control" name="county">
                    <option value="" key="0"/>
                    {testdata
                      ? testdata.map(otherEntity => (
                        <option value={otherEntity.value} key={otherEntity.value}>
                          {otherEntity.value}
                        </option>
                      ))
                      : null}
                  </AvInput>
                  </span>
                    </AvGroup>
                    <AvField
                      name="address"
                      label={<span style={{ float: 'left', marginTop: '7px' }}>详细地址：</span>}
                      placeholder={'请输入店铺地址'}
                      required
                      errorMessage="店铺地址不能为空!"
                      style={{ width: '70%', float: 'right' }}
                    />
                    <AvGroup>
                      <Label for="country-region">
                        <span style={{ float: 'left', marginTop: '7px' }}>让利比：</span>
                      </Label>
                      <span style={{ width: '70%', float: 'right' }}>
                  <AvInput required id="country-region" type="select" className="form-control" name="concession">
                    <option value="" key="0"/>
                    {concession.map(otherEntity =>
                      <option value={otherEntity.value} key={otherEntity.value}>
                        {otherEntity.value}%
                      </option>
                    )}
                  </AvInput>
                  </span>
                    </AvGroup>
                    <AvGroup check inline>
                      <Label className="form-check-label">
                        <AvInput type="checkbox" name="agreement"/>
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
          </div>)}
      </div>
    );
  }
}

const mapStateToProps = ({files,business,authentication,merchant}: IRootState) => ({
  filesEntity: files.entity,
  account: authentication.account,
  businesss: business.entities,
  isAuthenticated: authentication.isAuthenticated,
  merchantEntity: merchant.entity
});

const mapDispatchToProps = { getSession,createMyEntityMerchant, getBusinessEntities, setBlob ,getMyEntityMerchant,createFile};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upmerchant);
