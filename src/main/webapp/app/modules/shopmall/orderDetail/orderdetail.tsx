import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import OdLoopplayimg from './odloopplayimg';
import Swipeabledrawer from 'app/modules/shopmall/productDetail/swipeabledrawer';
import { getOrderInfoByOrderId } from 'app/requests/shopmall/shopmall.reducer';
import { toast } from 'react-toastify';

export interface IOrderDetailProp extends StateProps, DispatchProps {}

export class OrderDetail extends React.Component<IOrderDetailProp> {
  state = { messages: '' };
  componentDidMount() {
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
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div
          style={{
            width: '100%',
            backgroundColor: 'white'
          }}
        >
          {/* 轮播图、销量、地区、价格、详情图片+说明等等 */}
          <OdLoopplayimg />
          <div style={{ height: '100px', margin: '8px 8px 8px 8px', boxShadow: '#f8f9fa 0px 0px 0px 8px' }}>
            <p>芙妍瑜生物多肽胶原蛋白眼贴膜弹嫩紧致去眼袋眼纹去黑眼圈眼膜 5片/盒</p>
            <p style={{ float: 'left' }}>¥863.00</p>
            <p style={{ float: 'right' }}>包邮</p>
          </div>
          <Swipeabledrawer />
          <div style={{ margin: '8px 8px 8px 8px', boxShadow: '#f8f9fa 0px 0px 0px 8px' }}>
            <p>图文详情</p>
            <img
              style={{ width: '100%' }}
              src={'https://img.alicdn.com/imgextra/i2/2201208460196/O1CN015V7HFE1DJo9xwTB3S_!!2201208460196.jpg_2200x2200Q50s50.jpg_.webp'}
            />
            <img
              style={{ width: '100%' }}
              src={'https://img.alicdn.com/imgextra/i1/2201208460196/O1CN01rr9Zbi1DJoAL7VMw0_!!2201208460196.jpg_2200x2200Q90s50.jpg_.webp'}
            />
            <img
              style={{ width: '100%' }}
              src={'https://img.alicdn.com/imgextra/i3/2201208460196/O1CN01SunIOi1DJoAItB4Tj_!!2201208460196.jpg_2200x2200Q90s50.jpg_.webp'}
            />
            <img
              style={{ width: '100%' }}
              src={'https://img.alicdn.com/imgextra/i2/2201208460196/O1CN01Jwem3E1DJoAa22nCC_!!2201208460196.jpg_2200x2200Q50s50.jpg_.webp'}
            />
            <img
              style={{ width: '100%' }}
              src={'https://img.alicdn.com/imgextra/i1/2201208460196/O1CN01fV4v2Z1DJoAbgmrDU_!!2201208460196.jpg_2200x2200Q50s50.jpg_.webp'}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, getOrderInfoByOrderId };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail);
