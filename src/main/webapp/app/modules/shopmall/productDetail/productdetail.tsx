import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import PdLoopplayimg from './pdloopplayimg';
import Swipeabledrawer from 'app/modules/shopmall/productDetail/swipeabledrawer';
// tslint:disable-next-line: no-submodule-imports
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded';
// tslint:disable-next-line: no-submodule-imports
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
// tslint:disable-next-line: no-submodule-imports
import MoreHorizRounded from '@material-ui/icons/MoreHorizRounded';
import { Link } from 'react-router-dom';

export interface IProductDetailProp extends StateProps, DispatchProps {}

export class Productdetail extends React.Component<IProductDetailProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const mySpanStyle = {
      backgroundColor: '#ff000025',
      color: 'ff0000',
      borderRadius: '5px',
      fontSize: '0.45rem',
      margin: '0px 5px'
    };
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
          <div style={{ width: '100vw' }}>
            <Link to="/">
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '20px',
                  backgroundColor: '#00000095',
                  margin: '5px 0px 0px 5px',
                  float: 'left'
                }}
              >
                <ArrowBackIosRounded style={{ fill: '#ffffff', margin: '-16px 0px 0px 2px' }} />
              </div>
            </Link>
            <Link to="/">
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '20px',
                  backgroundColor: '#00000095',
                  margin: '5px 5px 0px 5px',
                  float: 'right'
                }}
              >
                <MoreHorizRounded style={{ fill: '#ffffff', margin: '-16px 0px 0px 3px' }} />
              </div>
            </Link>
            <Link to="/">
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '20px',
                  backgroundColor: '#00000095',
                  margin: '5px 0px 0px 5px',
                  float: 'right'
                }}
              >
                <ShoppingCartOutlined style={{ fill: '#ffffff', margin: '-16px 0px 0px 4px' }} />
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            backgroundColor: 'white'
          }}
        >
          {/* 轮播图、销量、地区、价格、详情图片+说明等等 */}
          <PdLoopplayimg />
          <div style={{ height: '100px', margin: '8px 0px', padding: '0px 10px', boxShadow: '#f8f9fa 0px 0px 0px 8px' }}>
            <p style={{ color: 'red', fontSize: '1.5rem' }}>
              <span style={{ fontSize: '1rem', marginLeft: '5px' }}>¥</span> 863.00
              <span style={mySpanStyle}>超值优惠</span>
              <span style={mySpanStyle}>积分精选区</span>
            </p>
            <p>芙妍瑜生物多肽胶原蛋白眼贴膜弹嫩紧致去眼袋眼纹去黑眼圈眼膜 5片/盒</p>
          </div>
          <div style={{ position: 'fixed', bottom: '0px', zIndex: 1000, width: '100%', backgroundColor: '#ffffff', height: '50px' }}>
            <Swipeabledrawer />
          </div>
          <div style={{ backgroundColor: '#ffffff', margin: '5px 0px', width: '100%', padding: '5px 10px' }}>
            <p style={{ marginBottom: '0px', color: '#717171' }}>
              发货
              <span style={{ color: '#000000', margin: '0px 20px' }}>广东广州</span>
              <span style={{ color: '#000000', margin: '0px 20px' }}>快递：免运费</span>
            </p>
          </div>
          <div style={{ width: '100%', height: '8px', backgroundColor: '#eeeeee70' }} />
          <div
            style={{ backgroundColor: '#ffffff', margin: '5px 0px', width: '100%', padding: '5px 10px', borderBottom: '1px solid #eeeeee' }}
          >
            <p style={{ marginBottom: '0px', color: '#717171' }}>
              服务<span style={{ color: '#000000', margin: '0px 20px' }}>24小时内发货 · 积分兑换</span>
            </p>
          </div>
          <div
            style={{ backgroundColor: '#ffffff', margin: '5px 0px', width: '100%', padding: '5px 10px', borderBottom: '1px solid #eeeeee' }}
          >
            <p style={{ marginBottom: '0px', color: '#717171' }}>
              选择<span style={{ color: '#000000', margin: '0px 20px' }}>所有颜色和分类</span>
            </p>
          </div>
          <div style={{ backgroundColor: '#ffffff', margin: '5px 0px', width: '100%', padding: '5px 10px' }}>
            <p style={{ marginBottom: '5px', color: '#717171' }}>
              参数<span style={{ color: '#000000', margin: '0px 20px' }}>品牌和型号</span>
            </p>
          </div>
          <div style={{ textAlign: 'center', boxShadow: '#f8f9fa 0px 0px 0px 8px' }}>
            <p>宝贝详情</p>
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
