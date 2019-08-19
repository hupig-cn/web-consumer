import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Label, ModalBody, ModalFooter, Row } from 'reactstrap';
import { AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { IRootState } from 'app/shared/reducers';
import { RouteComponentProps } from 'react-router';
import Title from 'app/modules/public/title';
import { resetMerchant, createMyEntityMerchant, getMyEntityMerchant } from 'app/requests/merchant/merchant.reducer';
import { getBusinessEntities } from 'app/requests/merchant/business.reducer';
import { setBlob, createFile } from 'app/requests/basic/files.reducer';
import { getNextAreaPnameProvince } from 'app/requests/basic/provinces.reducer';
import { getNextAreaPnameCity } from 'app/requests/basic/citys.reducer';
import { getNextAreaPnameCounty } from 'app/requests/basic/countys.reducer';
import { setFileData, byteSize } from 'react-jhipster';
import { toast } from 'react-toastify';
import { getSession } from 'app/shared/reducers/authentication';
import Info from 'app/modules/public/info';
import { queryRealName } from 'app/requests/basic/linkuser.reducer';
import Error from './info';
import lrz from 'lrz';
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

export class Upmerchant extends React.Component<IUpmerchantProps> {
  state = { realname: '' };
  componentDidMount() {
    this.props.getSession();
    this.props
      .queryRealName(this.props.account.id)
      // @ts-ignore
      .then(val => {
        this.setState({ realname: val.value.data });
      });
    this.props.getBusinessEntities();
    this.props.resetMerchant();
    this.props.getMyEntityMerchant(this.props.account.id);
    this.props.getNextAreaPnameProvince();
    this.props.setBlob('fileI', undefined, undefined);
    this.props.setBlob('fileII', undefined, undefined);
  }

  // tslint:disable-next-line: no-shadowed-variable
  handleSubmit = (
    event,
    errors,
    // tslint:disable-next-line: no-shadowed-variable
    {
      shopphoto,
      buslicenseimage,
      name,
      creditcode,
      businessid,
      province,
      city,
      county,
      address,
      concession,
      agreement,
      shopphototype,
      buslicensetype
    }
  ) => {
    if (!agreement) {
      toast.info('提示：请先阅读并同意《用户协议》。');
    } else if (shopphoto.length < 1) {
      toast.info('提示：请上传照片。');
    } else if (shopphoto.length > 8000000) {
      toast.info('提示：门店照片文件过大，请上传6M以内的文件。');
    } else if (buslicenseimage.length > 8000000) {
      toast.info('提示：营业执照文件过大，请上传6M以内的文件。');
    } else if (name.trim().length < 1) {
      toast.info('提示：商户名不能为空。');
    } else if (businessid.length < 1) {
      toast.info('提示：请选择经营类型。');
    } else if (province.length < 1) {
      toast.info('提示：所在省不能为空。');
    } else if (city.length < 1) {
      toast.info('提示：所在市不能为空。');
    } else if (address.trim().length < 1) {
      toast.info('提示：请填写详细地址。');
    } else if (concession.length < 1) {
      toast.info('提示：请选择让利比。');
    } else {
      this.onApply(
        shopphoto,
        buslicenseimage,
        name,
        businessid,
        address,
        province,
        city,
        county,
        concession,
        creditcode,
        shopphototype,
        buslicensetype
      );
    }
  };

  // tslint:disable-next-line: no-shadowed-variable
  onApply = (
    shopphoto,
    creditcode,
    name,
    businessid,
    address,
    province,
    city,
    county,
    concession,
    creditcodes,
    shopphototype,
    buslicensetype
  ) => {
    lrz(`data:${shopphototype};base64,${creditcode}`, { quality: 0.7 }).then(res => {
      const arr = res.base64.split(',');
      const fileid = this.props.createFile(this.props.account.id, res.fileLen, arr[1], this.props.filesEntity.fileIContentType);
      // @ts-ignore
      fileid.then((result: number) => {
        if (!isNaN(result)) {
          if (creditcode.length > 0) {
            // 上传营业执照 开始
            lrz(`data:${buslicensetype};base64,${creditcode}`, { quality: 0.7 }).then(respone => {
              const arrII = respone.base64.split(',');
              const fileidII = this.props.createFile(
                this.props.account.id,
                respone.fileLen,
                arrII[1],
                this.props.filesEntity.fileIIContentType
              );
              // @ts-ignore
              fileidII.then((resultII: number) => {
                if (!isNaN(resultII)) {
                  this.createMerchants(result, name, businessid, address, province, city, county, concession, resultII, creditcodes);
                } else {
                  toast.info('提示：营业执照上传失败。');
                }
              });
            });
            // 上传营业执照结束
          } else {
            this.createMerchants(result, name, businessid, address, province, city, county, concession, null, creditcodes);
          }
        } else {
          toast.info('提示：店铺照片上传失败。');
        }
      });
    });
  };

  // tslint:disable-next-line: no-shadowed-variable
  createMerchants = (shopphoto, name, businessid, address, province, city, county, concession, buslicenseimage, creditcode) => {
    this.props
      .createMyEntityMerchant(
        this.props.account.id,
        shopphoto,
        name,
        businessid,
        address,
        province,
        city,
        county,
        0,
        0,
        concession,
        buslicenseimage,
        creditcode
      )
      // @ts-ignore
      .then((result: { value: { data: React.ReactText } }) => {
        // @ts-ignore
        if (!isNaN(result.value.data)) {
          toast.success('提示：申请成功，请等待审核。');
          this.props.history.push('/');
        } else {
          toast.error('提示：' + result.value.data);
        }
      });
  };

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  uptitlephotoshop = () => {
    document.getElementById('upmerchant-upmerchant-uploadphoto-shop').click();
  };
  uptitlephotocode = () => {
    document.getElementById('upmerchant-upmerchant-uploadphoto-code').click();
  };

  reCity = () => {
    const doc = document.getElementById('country-region-province') as HTMLSelectElement;
    // @ts-ignore
    this.props.getNextAreaPnameCity(doc.value);
    this.props.getNextAreaPnameCounty();
  };

  reCounty = () => {
    const doc = document.getElementById('country-region-city') as HTMLSelectElement;
    // @ts-ignore
    this.props.getNextAreaPnameCounty(doc.value);
  };

  render() {
    const { provincess, cityss, countyss, account, merchantEntity, businesss, filesEntity } = this.props;
    const { fileI, fileIContentType, fileII, fileIIContentType } = filesEntity;
    return (
      <div>
        {this.state.realname === '已认证' ? (
          merchantEntity.id > 0 && account.id.toString() === merchantEntity.userid ? (
            <div>
              {merchantEntity.state === '待审核' ? (
                <Info />
              ) : (
                <div style={{ width: '100%', textAlign: 'center', marginTop: '40%' }}>
                  正在跳转到商户端，如无跳转请<a href={'http://app.yuanscore.com:8082'}>点击此处</a>。
                  <script type="text/javascript">
                    onload = function () {<span>setTimeout(go,3000)</span>}
                    function go(){location.replace('http://app.yuanscore.com:8082')}
                  </script>
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'left' }}>
              <Title name="商家入驻" back="/personal" />
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
                      <div
                        style={{
                          width: '100%',
                          height: 'auto',
                          overflow: 'hidden',
                          marginBottom: '10px'
                        }}
                      >
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
                            <input
                              style={{ display: 'none' }}
                              id="upmerchant-upmerchant-uploadphoto-shop"
                              type="file"
                              onChange={this.onBlobChange(true, 'fileI')}
                              accept="image/*"
                            />
                            <AvInput type="hidden" name="shopphoto" value={fileI} />
                            <AvInput type="hidden" name="shopphototype" value={fileIContentType} />
                            {fileI ? (
                              <div>
                                <span style={{ float: 'right', width: '50%', height: '100%' }}>
                                  <img
                                    src={`data:${fileIContentType};base64,${fileI}`}
                                    style={{ maxHeight: '100%', width: '100%', minHeight: '50px' }}
                                  />
                                </span>
                                <span style={{ float: 'left' }}>
                                  <Row>
                                    <Col md="11">
                                      <span>
                                        {fileIContentType}
                                        <br />
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
                      <div
                        style={{
                          width: '100%',
                          height: 'auto',
                          overflow: 'hidden',
                          marginBottom: '10px'
                        }}
                      >
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
                            <input
                              style={{ display: 'none' }}
                              id="upmerchant-upmerchant-uploadphoto-code"
                              type="file"
                              onChange={this.onBlobChange(true, 'fileII')}
                              accept="image/*"
                            />
                            <AvInput type="hidden" name="buslicenseimage" value={fileII} />
                            <AvInput type="hidden" name="buslicensetype" value={fileIIContentType} />
                            {fileII ? (
                              <div>
                                <span style={{ float: 'right', width: '50%', height: '100%' }}>
                                  <img
                                    src={`data:${fileIIContentType};base64,${fileII}`}
                                    style={{ maxHeight: '100%', width: '100%', minHeight: '50px' }}
                                  />
                                </span>
                                <span style={{ float: 'left' }}>
                                  <Row>
                                    <Col md="11">
                                      <span>
                                        {fileIIContentType}
                                        <br />
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
                        name="creditcode"
                        label={<span style={{ float: 'left', marginTop: '7px' }}>信用代码：</span>}
                        placeholder={'统一社会信用代码'}
                        style={{ width: '70%', float: 'right' }}
                      />
                      <AvGroup>
                        <Label for="country-region-businessid">
                          <span style={{ float: 'left', marginTop: '7px' }}>经营类型：</span>
                        </Label>
                        <span style={{ width: '70%', float: 'right' }}>
                          <AvInput id="country-region-businessid" type="select" className="form-control" name="businessid">
                            <option value="" key="0" />
                            {businesss
                              ? businesss.map(otherEntity => (
                                  <option value={otherEntity.name} key={otherEntity.id}>
                                    {otherEntity.name}
                                  </option>
                                ))
                              : null}
                          </AvInput>
                        </span>
                      </AvGroup>
                      <AvGroup>
                        <Label for="country-region-province">
                          <span style={{ float: 'left', marginTop: '7px' }}>所在省：</span>
                        </Label>
                        <span style={{ width: '70%', float: 'right' }}>
                          <AvInput
                            id="country-region-province"
                            type="select"
                            className="form-control"
                            name="province"
                            onChange={this.reCity}
                          >
                            <option value="" key="0" />
                            {provincess
                              ? provincess.map(province => (
                                  <option value={province.name} key={province.id}>
                                    {province.name}
                                  </option>
                                ))
                              : null}
                          </AvInput>
                        </span>
                      </AvGroup>
                      <AvGroup>
                        <Label for="country-region-city">
                          <span style={{ float: 'left', marginTop: '7px' }}>所在市：</span>
                        </Label>
                        <span style={{ width: '70%', float: 'right' }}>
                          <AvInput id="country-region-city" type="select" className="form-control" name="city" onChange={this.reCounty}>
                            <option value="" key="0" />
                            {cityss
                              ? cityss.map(city => (
                                  <option value={city.name} key={city.id}>
                                    {city.name}
                                  </option>
                                ))
                              : null}
                          </AvInput>
                        </span>
                      </AvGroup>
                      <AvGroup>
                        <Label for="country-region-county">
                          <span style={{ float: 'left', marginTop: '7px' }}>所在县：</span>
                        </Label>
                        <span style={{ width: '70%', float: 'right' }}>
                          <AvInput id="country-region-county" type="select" className="form-control" name="county">
                            <option value="" key="0" />
                            {countyss
                              ? countyss.map(county => (
                                  <option value={county.name} key={county.id}>
                                    {county.name}
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
                        <Label for="country-region-concession">
                          <span style={{ float: 'left', marginTop: '7px' }}>让利比：</span>
                        </Label>
                        <span style={{ width: '70%', float: 'right' }}>
                          <AvInput required id="country-region-concession" type="select" className="form-control" name="concession">
                            <option value="" key="0" />
                            {concession.map(otherEntity => (
                              <option value={otherEntity.value} key={otherEntity.value}>
                                {otherEntity.value}%
                              </option>
                            ))}
                          </AvInput>
                        </span>
                      </AvGroup>
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
          )
        ) : (
          <Error />
        )}
      </div>
    );
  }
}

// @ts-ignore
const mapStateToProps = ({ files, business, authentication, merchant, provinces, citys, countys }: IRootState) => ({
  filesEntity: files.entity,
  account: authentication.account,
  businesss: business.entities,
  isAuthenticated: authentication.isAuthenticated,
  merchantEntity: merchant.entity,
  provincess: provinces.entities,
  cityss: citys.entities,
  countyss: countys.entities
});

const mapDispatchToProps = {
  getSession,
  createMyEntityMerchant,
  getBusinessEntities,
  setBlob,
  resetMerchant,
  getMyEntityMerchant,
  createFile,
  getNextAreaPnameProvince,
  getNextAreaPnameCity,
  getNextAreaPnameCounty,
  queryRealName
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upmerchant);
