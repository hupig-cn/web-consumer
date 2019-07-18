import React from 'react';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
// tslint:disable-next-line: no-submodule-imports
import Divider from '@material-ui/core/Divider';
import Radiobuttons from './selectPayWayRadiobuttons';
import Title from 'app/modules/public/title';

export interface ISelectPayWayProp extends StateProps, DispatchProps {}

export class SelectPayWay extends React.Component<ISelectPayWayProp> {
  componentDidMount() {
    this.props.getSession();
  }

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
        <Radiobuttons />
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
          >
            确认支付
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPayWay);
