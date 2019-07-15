import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import PdLoopplayimg from './pdloopplayimg';
import Swipeabledrawer from 'app/modules/shopmall/productDetail/swipeabledrawer';
// tslint:disable-next-line: no-submodule-imports
import ArrowBackIos from '@material-ui/core/SvgIcon/SvgIcon';
import { Link } from 'react-router-dom';

export interface IProductDetailProp extends StateProps, DispatchProps {}

export class Productdetail extends React.Component<IProductDetailProp> {
  componentDidMount() {
    this.props.getSession();
  }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div
          style={{
            position: 'fixed',
            zIndex: 1,
            left: 0,
            right: 0,
            top: 0,
            lineHeight: '44px',
            overflow: 'visible',
            height: '44px',
            width: '44px'
          }}
        >
          <Link to="/">
            <ArrowBackIos
              style={{
                fill: '#00000086'
              }}
            />
          </Link>
        </div>
        <div
          style={{
            width: '100%',
            backgroundColor: 'white'
          }}
        >
          {/* 轮播图、销量、地区、价格、详情图片+说明等等 */}
          <PdLoopplayimg />
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

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Productdetail);
