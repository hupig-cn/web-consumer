import React from 'react';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
// tslint:disable-next-line: no-submodule-imports
import Divider from '@material-ui/core/Divider';
import Radiobuttons from './selectPayWayRadiobuttons';
import Title from 'app/modules/public/title';
import { toast } from 'react-toastify';
import { AliPay, yuePay, integralPay } from 'app/requests/basic/result.reducer';
import { bigorder } from 'app/modules/shopmall/orderPayment/createOrder';
import { Link } from 'react-router-dom';

export interface ISelectPayWayProp extends StateProps, DispatchProps {}

export class SelectPayWay extends React.Component<ISelectPayWayProp> {
  componentDidMount() {
    this.props.getSession();
  }
  constructor(props) {
    super(props);
    this.state = {
      payWay: ''
    };
  }
  handleChoosePayWay = value => {
    // 传入值判断当前支付方式
    if (value !== null && value !== '' && value !== 'yue' && value !== 'jifen' && value !== 'zhifubao' && value !== 'weixin') {
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
      this.props.yuePay(bigorder, '123456', null, 50);
    } else if (value === 'jifen') {
      // @ts-ignore
      this.props.integralPay(bigorder, '', this.props.location.integral);
    } else if (value === 'zhifubao') {
      // 支付宝支付
      const data = this.props.AliPay(bigorder);
      // @ts-ignore
      data.then(res => {
        window.location.replace('alipays://platformapi/startapp?appId=20000067&url=' + res.value.data.data[0]);
      });
    } else if (value === 'weixin') {
      // 微信支付
      toast.error('微信支付努力开发中');
    } else {
      toast.error('支付方式异常,请重新选择');
    }
  };
  render() {
    return (
      <div style={{ height: '100%' }}>
        {/*头部标题*/}
        <Title name="订单支付" back="/createOrder" />
        <Divider />
        {/*图片订单编号价格等信息*/}
        <div
          style={{
            margin: '45px 15px 15px 15px',
            overflow: 'hidden'
          }}
        >
          <div>
            <div style={{ float: 'left', marginBottom: '10px' }}>
              <img style={{ height: '18px', width: '15px' }} src={'http://img0.imgtn.bdimg.com/it/u=2519501909,294206455&fm=26&gp=0.jpg'} />
            </div>
            <div>博媛官方旗舰店</div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ height: '120px', width: '100px', float: 'left' }}>
              <img
                style={{ height: '120px', width: '100px' }}
                src={'https://img.alicdn.com/bao/uploaded/O1CN01Zt1WHw1DJoAOObYak_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp'}
              />
            </div>
            <div style={{ width: '50%', float: 'left', padding: '8px 0px 0px 10px', height: '120px' }}>
              <span>芙妍瑜生物多肽胶原蛋白眼贴膜弹嫩紧致去眼袋眼纹去黑眼圈眼膜 5片/盒</span>
            </div>
            <div style={{ width: '75px', float: 'left' }}>
              <p style={{ color: 'red', fontSize: '0.5rem' }}>
                <span style={{ fontSize: '1rem', marginLeft: '5px' }}>¥</span> 863.00
              </p>
              <p style={{ fontSize: '0.5rem', float: 'right', marginRight: '20px', bottom: '20px', position: 'relative' }}>
                <span>x1</span>
              </p>
            </div>
          </div>
        </div>
        <Divider />
        {/*支付方式选择*/}
        <Radiobuttons handlepay={this.handleChoosePayWay} />
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
            // tslint:disable-next-line: jsx-no-lambda
          >
            确认支付
          </button>
        </div>
        <Link id="app-modules-consumer-quickaccess-button-link-payment" to="/payment" />
      </div>
    );
  }
}

const mapStateToProps = (storeState: { authentication: { account: any; isAuthenticated: any } }) => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, AliPay, yuePay, integralPay };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPayWay);
