import React from 'react';
import { getSession, passwordCheck } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
// tslint:disable-next-line: no-submodule-imports
import Divider from '@material-ui/core/Divider';
import Radiobuttons from './selectPayWayRadiobuttons';
import Title from 'app/modules/public/title';
import { toast } from 'react-toastify';
import { AliPay, yuePay, integralPay, getPayMethod, getOrderInfoByOrderId } from 'app/requests/basic/result.reducer';
import { Link } from 'react-router-dom';
import { number } from 'app/modules/shopmall/productDetail/swipeabledrawer';
import { getMyImgs } from 'app/requests/basic/files.reducer';
import { PropTypes } from '@material-ui/core';
import Margin = PropTypes.Margin;
import FirstSetPayPass from 'app/modules/shopmall/payPassword/firstSetPayPass';

export interface ISelectPayWayProp extends StateProps, DispatchProps {}

export class SelectPayWay extends React.Component<ISelectPayWayProp> {
  state = {
    payWay: '',
    payMethod: [],
    imgs: [],
    products: [],
    totalAmout: []
  };
  componentDidMount() {
    let userAgent = navigator.userAgent.toLowerCase();
    userAgent.match('android') ? (userAgent = 'android') : (userAgent = 'ios');
    this.props.getSession();
    const paymethod = this.props.getPayMethod(userAgent, true);
    // @ts-ignore
    paymethod.then(res => {
      if (res.value.data.code === 1) {
        this.setState({
          payMethod: res.value.data.data
        });
      }
    });
    // 根据订单号查询订单信息,商品信息获取到名称和邮费
    // 商品规格表获取到价格
    // 订单上面获取到数量
    // 根据商品价格和数量 计算出总价
    // 查询出价格 名称 规格 , 邮费 ,计算出总价
    // if (this.props.location.bigorder === null) {
    //   const OrderInfos = this.props.getOrderInfoByOrderId(bigorder);
    //   // @ts-ignore
    //   OrderInfos.then(res => {
    //     const imgarr = [];
    //     this.setState({
    //       products: res.value.data.data[0].orderInfo,
    //       totalAmout: res.value.data.data[0].totalAmout
    //     });
    //     res.value.data.data[0].orderInfo.map(elem => {
    //       imgarr.push(elem.fileid);
    //       // @ts-ignore
    //       const img = this.props.getMyImgs(imgarr);
    //       // @ts-ignore
    //       img.then(respone => {
    //         this.setState({
    //           imgs: respone.value.data
    //         });
    //       });
    //     });
    //   });
    // @ts-ignore
    const OrderInfos = this.props.getOrderInfoByOrderId(this.props.location.bigorder);
    // @ts-ignore
    OrderInfos.then(res => {
      const imgarr = [];
      this.setState({
        products: res.value.data.data[0].orderInfo,
        totalAmout: res.value.data.data[0].totalAmout
      });
      res.value.data.data[0].orderInfo.map(elem => {
        imgarr.push(elem.fileid);
        // @ts-ignore
        const img = this.props.getMyImgs(imgarr);
        // @ts-ignore
        img.then(respone => {
          this.setState({
            imgs: respone.value.data
          });
        });
      });
    });
  }
  constructor(props) {
    super(props);
  }
  handleChoosePayWay = value => {
    // 传入值判断当前支付方式
    if (
      value === null ||
      value === '' ||
      (value !== 'yue' && value !== 'jifen' && value !== 'zhifubao' && value !== 'weixin' && value !== 'coupon')
    ) {
      toast.error('支付方式异常,请重新选择');
    } else {
      this.setState({
        payWay: value
      });
    }
  };
  handlePay = () => {
    // 余额支付传入支付密码和订单id
    // 积分支付传入所需积分和订单id,支付密码
    // 支付宝支付传入订单号
    // @ts-ignore
    const value = this.state.payWay;
    if (value === 'yue') {
      // 余额支付
      // 订单号,支付密码
      const result = this.props.passwordCheck();
      // @ts-ignore
      result.then(res => {
        if (res.value.data.code === 0) {
          document.getElementById('bottomdiv').style.height = '80%';
        } else {
          document.getElementById('app-modules-consumer-quickaccess-button-link-payment').click();
        }
      });
    } else if (value === 'jifen') {
      const result = this.props.passwordCheck();
      // @ts-ignore
      result.then(res => {
        if (res.value.data.code === 0) {
          document.getElementById('bottomdiv').style.height = '80%';
        } else {
          // @ts-ignore
          if (this.props.location.productid !== 1) {
            document.getElementById('app-modules-consumer-quickaccess-button-link-payment').click();
          } else {
            toast.error('圆帅不允许使用积分支付');
          }
        }
      });
    } else if (value === 'zhifubao') {
      // 支付宝支付
      // @ts-ignore
      const data = this.props.AliPay(this.props.location.bigorder);
      // @ts-ignore
      data.then(res => {
        window.location.replace('alipays://platformapi/startapp?appId=20000067&url=' + res.value.data.data[0]);
      });
    } else if (value === 'weixin') {
      // 微信支付
      toast.error('微信支付努力开发中');
    } else if (value === 'coupon') {
      const result = this.props.passwordCheck();
      // @ts-ignore
      result.then(res => {
        if (res.value.data.code === 0) {
          document.getElementById('bottomdiv').style.height = '80%';
        } else {
          // @ts-ignore
          if (this.props.location.productid !== 1) {
            document.getElementById('app-modules-consumer-quickaccess-button-link-payment').click();
          } else {
            toast.error('圆帅不允许使用优惠卷支付');
          }
        }
      });
    } else {
      toast.error('支付方式异常,请重新选择');
    }
  };
  render() {
    return (
      <div style={{ height: '100%' }}>
        {/*头部标题*/}
        <Title
          name="订单支付"
          back="/createOrder"
          // @ts-ignore
          productid={this.props.location.productid ? this.props.location.productid : null}
          // @ts-ignore
          cards={this.props.location.cards ? this.props.location.cards : null}
        />
        <Divider />
        {/*图片订单编号价格等信息*/}
        <div
          style={{
            margin: '45px 15px 15px 15px',
            overflow: 'hidden'
          }}
        >
          <div>
            {/*<div style={{ float: 'left', marginBottom: '10px' }}>*/}
            {/*  <img style={{ height: '18px', width: '15px' }} src={'http://img0.imgtn.bdimg.com/it/u=2519501909,294206455&fm=26&gp=0.jpg'} />*/}
            {/*</div>*/}
            <div>博媛官方旗舰店</div>
          </div>
          {this.state.products.length !== 0 ? (
            this.state.products.map((product, index) => (
              // tslint:disable-next-line:jsx-key
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
                      src={'https://img.alicdn.com/bao/uploaded/O1CN01Zt1WHw1DJoAOObYak_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp'}
                    />
                  )}
                </div>
                <div style={{ width: '50%', float: 'left', padding: '8px 0px 0px 10px', height: '120px' }}>
                  <span>
                    {product.name}
                    {product.json}
                  </span>
                </div>
                <div style={{ width: '75px', float: 'left' }}>
                  <p style={{ color: 'red', fontSize: '0.5rem' }}>
                    <span style={{ fontSize: '1rem', marginLeft: '5px' }}>¥</span> {product.price}
                  </p>
                  <p style={{ fontSize: '0.5rem', float: 'right', marginRight: '20px', bottom: '20px', position: 'relative' }}>
                    <span>x{product.num}</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>加载订单信息中</div>
          )}
        </div>
        <Divider />
        <div style={{ textAlign: 'center' }}>总价:{this.state.totalAmout}元</div>
        {/*支付方式选择*/}
        {this.state.payMethod.length !== 0 ? (
          <Radiobuttons handlepay={this.handleChoosePayWay} paymethod={this.state.payMethod} />
        ) : (
          <div>加载支付方式中</div>
        )}
        {/*<Radiobuttons handlepay={this.handleChoosePayWay} />*/}
        {/*确认支付按钮*/}
        <div style={{ minHeight: '80px' }}>
          <button
            onClick={this.handlePay}
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
          >
            确认支付
          </button>
        </div>
        <FirstSetPayPass />
        <Link
          id="app-modules-consumer-quickaccess-button-link-payment"
          to={{
            pathname: '/payment',
            paymethod: this.state.payWay !== null ? this.state.payWay : null,
            // @ts-ignore
            bigorder: this.props.location.bigorder
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (storeState: { authentication: { account: any; isAuthenticated: any } }) => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, AliPay, yuePay, integralPay, getPayMethod, getOrderInfoByOrderId, getMyImgs, passwordCheck };
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPayWay);
