import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import OdLoopplayimg from './odloopplayimg';

export interface IOrderDetailProp extends StateProps, DispatchProps {}

export class OrderDetail extends React.Component<IOrderDetailProp> {
  componentDidMount() {
    this.props.getSession();
  }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div
          style={{
            width: '100%',
            backgroundColor: 'rgba(113,113,113,0.41)'
          }}
        >
          <OdLoopplayimg />
          <div style={{ height: '100px', marginTop: '8px', marginBottom: '8px' }}>
            <p>芙妍瑜生物多肽胶原蛋白眼贴膜弹嫩紧致去眼袋眼纹去黑眼圈眼膜 5片/盒</p>
            <p style={{ float: 'left' }}>¥863.00</p>
            <p style={{ float: 'right' }}>包邮</p>
          </div>
          <div>
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
          {/* 轮播图、销量、地区、价格、详情图片+说明等等 */}
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
)(OrderDetail);