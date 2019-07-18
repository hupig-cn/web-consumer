import React from 'react';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// tslint:disable-next-line: no-submodule-imports
import Divider from '@material-ui/core/Divider';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/core/SvgIcon/SvgIcon';
import { getDefaultAddress } from 'app/requests/basic/basic.reducer';
export interface ICreateOrderProp extends StateProps, DispatchProps {}

export class CreateOrder extends React.Component<ICreateOrderProp> {
  state = {
    consignee: '陈小杨',
    mobile: '13866668888',
    address: '广州市广州大道中988号圣丰广场国际金融中心25楼'
  };

  componentDidMount() {
    // @ts-ignore
    this.props.getSession().then(respone => {
      // @ts-ignore
      this.props.getDefaultAddress(respone.id).then(res => {
        this.setState({
          consignee: res.value.data.data[0].consignee,
          mobile: res.value.data.data[0].mobile,
          address: res.value.data.data[0].address
        });
      });
    });
  }

  selectpayway() {
    document.getElementById('app-modules-consumer-quickaccess-button-link-selectpayway').click();
    return null;
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        {/*头部标题*/}
        <Title name="创建订单" back="/productdetail" />
        {/*地址模块*/}
        <div
          style={{
            margin: '45px 15px 15px 15px',
            minHeight: '80px',
            overflow: 'hidden'
          }}
        >
          <Link to="/selectAddress">
            <div>
              <div>
                <div>
                  <span style={{ fontSize: '1.0rem', color: '#000000' }}>
                    收货人: {this.state.consignee} &nbsp;&nbsp;&nbsp;&nbsp;手机号码: {this.state.mobile}
                  </span>
                </div>
                <div
                  style={{
                    float: 'left',
                    width: '25%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '0.9rem',
                    color: '#666666',
                    marginTop: '0.1rem'
                  }}
                >
                  收货地址：
                </div>
                <div
                  style={{
                    float: 'left',
                    width: '65%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '0.9rem',
                    color: '#666666',
                    marginTop: '0.1rem'
                  }}
                >
                  {this.state.address}
                </div>
              </div>
              {/*<div>*/}
              {/*  <div style={{ color: '#c6c5c5' }}>请先选择地址或新增地址</div>*/}
              {/*</div>*/}
            </div>
          </Link>
        </div>
        <Divider />
        {/*图片订单编号价格等信息*/}
        <div style={{ height: '180px', margin: '15px 0px 15px 15px' }}>
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
            <div style={{ maxWidth: '50%', float: 'left', padding: '8px 0px 0px 10px', height: '120px' }}>
              <span>芙妍瑜生物多肽胶原蛋白眼贴膜弹嫩紧致去眼袋眼纹去黑眼圈眼膜 5片/盒</span>
            </div>
            <div style={{ width: '60px', float: 'left' }}>
              <p style={{ color: 'red', fontSize: '0.5rem' }}>
                <span style={{ fontSize: '1rem', marginLeft: '5px' }}>¥</span> 863.00
              </p>
              <p style={{ fontSize: '0.5rem', float: 'right', marginRight: '20px', bottom: '20px', position: 'relative' }}>
                <span>x1</span>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '15px 5px 15px 15px',
            margin: '1px 0px',
            borderTop: '1px solid #B1B1B1',
            borderBottom: '1px solid #B1B1B1',
            'text-align': 'right'
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
            borderBottom: '1px solid #B1B1B1',
            'text-align': 'right'
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
            borderBottom: '1px solid #B1B1B1',
            'text-align': 'right'
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
        <Link id="app-modules-consumer-quickaccess-button-link-selectpayway" to="/selectpayway" />
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, getDefaultAddress };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrder);
