import React from 'react';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// tslint:disable-next-line: no-submodule-imports
import Divider from '@material-ui/core/Divider';
import Title from 'app/modules/public/title';
import { getOrderInfo, PaySum, createUserOrder, createShopOrder, getDefaultAddress } from 'app/requests/basic/result.reducer';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/core/SvgIcon/SvgIcon';
import Error from 'app/modules/public/error';
import { toast } from 'react-toastify';
import { number } from 'app/modules/shopmall/productDetail/swipeabledrawer';
import { getMyImgs } from 'app/requests/basic/files.reducer';
import { getOrderInfoByOrderId } from 'app/requests/shopmall/shopmall.reducer';

export interface IOrderDetailProp extends StateProps, DispatchProps {}

export class OrderDetail extends React.Component<IOrderDetailProp> {
  state = {
    price: '',
    consignee: '收货人',
    mobile: '13866668888',
    address: '广州市天河区天河路383号太古汇太古汇太古汇太古汇太古汇太古汇',
    products: [],
    totalAmout: '',
    havaDefault: false,
    imgs: [],
    bigorder: '',
    messages: ''
  };
  componentDidMount() {
    this.props.getSession();
    const { account } = this.props;
    // @ts-ignore
    this.props.getDefaultAddress(account.id).then(res => {
      if (res.value.data.code === 1) {
        this.setState({
          consignee: res.value.data.data[0].consignee,
          mobile: res.value.data.data[0].mobile,
          address: res.value.data.data[0].areaid + res.value.data.data[0].address,
          havaDefault: true
        });
      }
    });
    // 根据商品id获取商品信息
    // @ts-ignore
    if (this.props.location.state.cards) {
      // @ts-ignore
      const product = this.props.getOrderInfo(account.id, null, this.props.location.state.cards, number);
      // @ts-ignore
      product.then(res => {
        const imgsarr = [];
        res.value.data.data[0].orderInfo.map(info => {
          imgsarr.push(info.fileid);
        });
        // @ts-ignore
        const files = this.props.getMyImgs(imgsarr);
        // tslint:disable-next-line: no-shadowed-variable
        // @ts-ignore
        files.then((respone: { value: { data: any } }) => {
          this.setState({
            imgs: respone.value.data
          });
        });
        this.setState({
          // @ts-ignore
          products: res.value.data.data[0].orderInfo,
          totalAmout: res.value.data.data[0].totalAmout
        });
      });
    } else {
      // @ts-ignore
      const product = this.props.getOrderInfo(account.id, this.props.location.state.productid, null, number);
      // @ts-ignore
      product.then(res => {
        const imgsarr = [];
        imgsarr.push(res.value.data.data[0].orderInfo.fileid);
        // @ts-ignore
        const files = this.props.getMyImgs(imgsarr);
        // tslint:disable-next-line: no-shadowed-variable
        // @ts-ignore
        files.then((respone: { value: { data: any } }) => {
          this.setState({
            imgs: respone.value.data
          });
        });
        const add = [];
        add.push(res.value.data.data[0].orderInfo);
        this.setState({
          products: add,
          totalAmout: res.value.data.data[0].totalAmout
        });
      });
    }
    // 获取到商品信息然后渲染到页面
    // 提交订单前先提交数据到后台获取到订单价格
    // @ts-ignore
    // tslint:disable-next-line: radix
    // const price = this.props.PaySum(this.props.location.state.productid, parseInt(number));
    // // @ts-ignore
    // price.then(res => {
    //   // @ts-ignore
    //   const result = this.props.createUserOrder(account.id, res.value.data.data[0], this.props.location.state.productid);
    //   // @ts-ignore
    //   result.then(respone => {
    //     if (respone.value.data.code === 1) {
    //       this.setState({
    //         bigorder: respone.value.data.data[0]
    //       });
    //     } else {
    //       toast.error('错误：' + respone.value.data.message);
    //     }
    //   });
    // });
    // @ts-ignore
    alert(this.props.location.bigorderid);
    // @ts-ignore
    this.getOrderInfoByOrderId(this.props.location.bigorderid);
  }

  getOrderInfoByOrderId(orderid) {
    const result = this.props.getOrderInfoByOrderId(orderid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.data.totalAmout !== 0) {
        this.setState({
          messages: res.value.data.data
        });
        alert(this.state.messages);
      } else {
        toast.error('数据异常：该订单号下没有详情');
      }
    });
  }

  selectpayway() {
    const { account } = this.props;
    const address = document.getElementById('address').innerText;
    const mobile = document.getElementById('mobile').innerText;
    const consignee = document.getElementById('consignee').innerText;
    // @ts-ignore
    // tslint:disable-next-line: radix
    const price = this.props.PaySum(this.props.location.state.productid, parseInt(number));
    // @ts-ignore
    price.then(res => {
      // @ts-ignore
      const result = this.props.createUserOrder(account.id, res.value.data.data[0], this.props.location.state.productid);
      // @ts-ignore
      result.then(respone => {
        if (respone.value.data.code === 1) {
          this.setState({
            bigorder: respone.value.data.data[0]
          });
          // @ts-ignore
          const data = this.props.createShopOrder(
            account.id,
            null,
            // @ts-ignore
            this.props.location.state.productid,
            number,
            this.state.bigorder,
            consignee,
            mobile,
            address
          );
          // @ts-ignore
          data.then(datares => {
            if (res.value.data.code === 1) {
              // toast.success(datares.value.data.message);
              const info = document.getElementById('app-modules-consumer-quickaccess-button-link-selectpayway');
              info.click();
            } else {
              toast.error('错误：' + datares.value.data.message);
            }
          });
        } else {
          toast.error('错误：' + respone.value.data.message);
        }
      });
    });
  }

  render() {
    const { resultEntity } = this.props;
    const { account } = this.props;
    return (
      <div>
        {account && account.login ? (
          <div style={{ height: '100%' }}>
            {/*头部标题*/}
            <Title
              name="创建订单"
              back="/productdetail"
              // @ts-ignore
              productid={this.props.location.state.productid ? this.props.location.state.productid : undefined}
              // @ts-ignore
              cards={this.props.location.state.cards ? this.props.location.state.cards : undefined}
            />
            <div
              style={{
                height: '35px',
                width: '100vw',
                margin: 0,
                padding: 0,
                border: 'none'
              }}
            />
            {/*地址模块*/}
            <div
              style={{
                margin: '20px',
                minHeight: '72px'
              }}
            >
              <Link
                to={{
                  pathname: '/selectAddress',
                  state: {
                    // @ts-ignore
                    productid: this.props.location.state.productid ? this.props.location.state.productid : undefined,
                    // @ts-ignore
                    cards: this.props.location.state.cards ? this.props.location.state.cards : undefined
                  }
                }}
              >
                {this.state.havaDefault === true ? (
                  <div>
                    <div>
                      <div>
                        <span>收货人:</span>
                        <span id="consignee" style={{ marginLeft: '7px' }}>
                          {this.state.consignee}
                        </span>
                      </div>
                      <div
                        style={{
                          float: 'left',
                          width: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontSize: '1rem',
                          marginTop: '0.1rem',
                          'white-space': 'nowrap'
                        }}
                      >
                        <span>手机号码:</span>
                        <span id="mobile" style={{ marginLeft: '7px' }}>
                          {this.state.mobile}
                        </span>
                      </div>
                      <div
                        style={{
                          float: 'left',
                          width: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontSize: '1rem',
                          marginTop: '0.1rem',
                          'white-space': 'nowrap'
                        }}
                      >
                        收货地址：
                        <span
                          style={{
                            width: '65%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: '1rem',
                            marginTop: '0.1rem'
                          }}
                          id="address"
                        >
                          {this.state.address}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{ color: '#c6c5c5' }}>请先选择地址或新增地址</div>
                  </div>
                )}
              </Link>
            </div>
            <Divider />
            {/*图片订单编号价格等信息*/}
            {// @ts-ignore
            this.state.products ? (
              this.state.products.map((product, index) => (
                // tslint:disable-next-line: jsx-key
                <div style={{ height: '160px', margin: '15px' }}>
                  <div>
                    <div style={{ float: 'left', marginBottom: '10px' }}>
                      <img style={{ height: '24px', width: '24px' }} src={'./content/images/user.png'} />
                    </div>
                    <div style={{ margin: '15px' }}>博媛官方旗舰店</div>
                  </div>
                  <div style={{ width: '100%' }}>
                    <div style={{ height: '120px', width: '100px', float: 'left' }}>
                      {this.state.imgs.length !== 0 ? (
                        <img
                          style={{ height: '120px', width: '100px' }}
                          src={`data:${this.state.imgs[index].fileContentType};base64,${this.state.imgs[index].file}`}
                        />
                      ) : (
                        <img
                          style={{ height: '120px', width: '100px' }}
                          src={
                            // @ts-ignore
                            this.props.location.state.img
                          }
                        />
                      )}
                    </div>
                    <div
                      style={{ maxWidth: '100%', width: 'calc(100% - 100px)', float: 'left', padding: '8px 0px 0px 10px', height: '85px' }}
                    >
                      <span>
                        {' '}
                        {product.name} {product.attr}{' '}
                      </span>
                    </div>
                    <div style={{ width: '100px', float: 'right' }}>
                      <p style={{ color: 'red', fontSize: '0.5rem', width: '100px' }}>
                        <span style={{ fontSize: '1rem', marginLeft: '5px' }}>¥</span>{' '}
                        <span style={{ fontSize: '1.2rem' }}>{product.price}</span>
                        <span style={{ marginLeft: '10px' }}>x</span>
                        <span>{product.number}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>加载中</div>
            )}

            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '15px 5px 15px 15px',
                margin: '1px 0px',
                borderTop: '1px solid #e0e0e0',
                borderBottom: '1px solid #e0e0e0',
                textAlign: 'right'
              }}
            >
              <span style={{ float: 'left' }}>配送方式</span>
              <span>快递 免邮</span>
              <ChevronRightRounded style={{ float: 'right' }} />
            </div>
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '15px 5px 15px 15px',
                margin: '1px 0px',
                borderBottom: '1px solid #e0e0e0',
                textAlign: 'right'
              }}
            >
              <span style={{ float: 'left' }}>发票</span>
              <span>本次不开具发票</span>
              <ChevronRightRounded style={{ float: 'right' }} />
            </div>
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '15px 5px 15px 15px',
                margin: '1px 0px',
                borderBottom: '1px solid #e0e0e0',
                textAlign: 'right'
              }}
            >
              <span style={{ float: 'left' }}>运费险</span>
              <span>无</span>
              <ChevronRightRounded style={{ float: 'right' }} />
            </div>
            {/*支付方式选择*/}
            {/*<Radiobuttons />*/}
            {/*确认支付按钮*/}
            <div style={{ minHeight: '80px' }}>
              <button
                type="button"
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
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => this.selectpayway()}
              >
                提交订单
              </button>
            </div>
            <Link
              id="app-modules-consumer-quickaccess-button-link-selectpayway"
              // @ts-ignore
              to={{
                pathname: '/selectpayway',
                state: {
                  // @ts-ignore
                  bigorder: this.state.bigorder,
                  // @ts-ignore
                  integral: this.props.location.state.integral,
                  // @ts-ignore
                  productid: this.props.location.state.productid,
                  // @ts-ignore
                  cards: this.props.location.state.cards
                }
              }}
            />
          </div>
        ) : (
          <Error />
        )}
      </div>
    );
  }
}

const mapStateToProps = (storeState: { authentication: { account: any; isAuthenticated: any }; result: { entity: any } }) => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
  resultEntity: storeState.result.entity
});

const mapDispatchToProps = {
  getOrderInfoByOrderId,
  getSession,
  getOrderInfo,
  PaySum,
  createUserOrder,
  createShopOrder,
  getDefaultAddress,
  getMyImgs
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail);
