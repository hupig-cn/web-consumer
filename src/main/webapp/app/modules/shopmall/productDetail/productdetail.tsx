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
import { IRootState } from 'app/shared/reducers';
import { getMyImgs } from 'app/requests/basic/files.reducer';
import { getProdcutImg } from 'app/requests/basic/result.reducer';
export interface IProductDetailProp extends StateProps, DispatchProps {}

export class Productdetail extends React.Component<IProductDetailProp> {
  state = { carouselimg: [], introduceimg: [] };
  constructor(props) {
    super(props);
    this.state = {
      carouselimg: [],
      introduceimg: []
    };
  }
  componentDidMount() {
    this.props.getSession();
    // @ts-ignore
    const data = this.props.getProdcutImg(this.props.location.id);
    const carouselIds = [];
    const introduceIds = [];
    // @ts-ignore
    data.then(res => {
      res.value.data.data.map((image, index) => {
        if (image.type === '1') {
          carouselIds.push(image.fileid);
        } else {
          introduceIds.push(image.fileid);
        }
        if (index === res.value.data.data.length - 1) {
          if (carouselIds.length !== 0) {
            // @ts-ignore
            const carousel = this.props.getMyImgs(carouselIds);
            // @ts-ignore
            // tslint:disable-next-line: no-shadowed-variable
            carousel.then((res: { value: { data: any } }) => {
              this.setState({
                carouselimg: res.value.data
              });
            });
          }
          if (introduceIds.length !== 0) {
            // @ts-ignore
            const introduce = this.props.getMyImgs(introduceIds);
            // @ts-ignore
            // tslint:disable-next-line: no-shadowed-variable
            introduce.then((res: { value: { data: any } }) => {
              this.setState({
                introduceimg: res.value.data
              });
            });
          }
        }
      });
    });
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
          <PdLoopplayimg
            // @ts-ignore
            img={this.state.carouselimg}
          />
          <div style={{ height: '100px', margin: '8px 0px', padding: '0px 10px', boxShadow: '#f8f9fa 0px 0px 0px 8px' }}>
            <p style={{ color: 'red', fontSize: '1.5rem' }}>
              <span style={{ fontSize: '1rem', marginLeft: '5px' }}>¥</span>{' '}
              {
                // @ts-ignore
                this.props.location.price
              }
              <span style={mySpanStyle}>超值优惠</span>
              <span style={mySpanStyle}>积分精选区</span>
              <span
                style={{
                  color: 'blue',
                  fontSize: '1rem'
                }}
              >
                {
                  // @ts-ignore
                  this.props.location.integral
                }
                积分兑换
              </span>
              <span
                style={{
                  color: 'green',
                  float: 'right'
                }}
              >
                库存:
                {
                  // @ts-ignore
                  this.props.location.num
                }
              </span>
            </p>
            <p>
              {
                // @ts-ignore
                this.props.location.name
              }{' '}
              {
                // @ts-ignore
                this.props.location.model
              }{' '}
              {this.props.location.json}
            </p>
          </div>
          <div style={{ position: 'fixed', bottom: '0px', zIndex: 1000, width: '100%', backgroundColor: '#ffffff', height: '50px' }}>
            <Swipeabledrawer
              // @ts-ignore
              id={this.props.location.id}
              // @ts-ignore
              num={this.props.location.num}
              // @ts-ignore
              json={this.props.location.json}
              // @ts-ignore
              model={this.props.location.model}
              // @ts-ignore
              price={this.props.location.price}
              // @ts-ignore
              img={this.props.location.img}
              // @ts-ignore
              integral={this.props.location.integral}
            />
          </div>
          <div style={{ backgroundColor: '#ffffff', margin: '5px 0px', width: '100%', padding: '5px 10px' }}>
            <p style={{ marginBottom: '0px', color: '#717171' }}>
              发货
              <span style={{ color: '#000000', margin: '0px 20px' }}>广东广州</span>
              <span style={{ color: '#000000', margin: '0px 20px' }}>
                快递：
                {// @ts-ignore
                this.props.location.postage === '0' ? '免运费' : this.props.location.postage}
                {// @ts-ignore
                this.props.location.postage === '0' ? '' : '元'}
              </span>
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
            {// @ts-ignore
            this.state.introduceimg.length !== 0 ? (
              // @ts-ignore
              this.state.introduceimg.map(introduce => (
                <img style={{ width: '100%' }} src={`data:${introduce.fileContentType};base64,${introduce.file}`} />
              ))
            ) : (
              <img
                style={{ width: '100%' }}
                src={
                  'https://img.alicdn.com/imgextra/i2/2201208460196/O1CN015V7HFE1DJo9xwTB3S_!!2201208460196.jpg_2200x2200Q50s50.jpg_.webp'
                }
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ files }: IRootState, storeState) => ({
  filesEntitys: files.entities
});

const mapDispatchToProps = { getSession, getProdcutImg, getMyImgs };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Productdetail);
