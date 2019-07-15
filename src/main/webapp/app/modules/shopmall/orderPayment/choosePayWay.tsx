import React from 'react';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// tslint:disable-next-line: no-submodule-imports
import Divider from '@material-ui/core/Divider';
import Radiobuttons from './radiobuttons';

export interface IChoosePayWayProp extends StateProps, DispatchProps {}

export class ChoosePayWay extends React.Component<IChoosePayWayProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        {/*头部标题*/}
        <div>
          <Link to="/productdetail">
            <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>订单支付</div>
          </Link>
        </div>
        <Divider />
        {/*地址模块*/}
        <div
          style={{
            margin: '15px 15px 15px 15px',
            minHeight: '80px',
            overflow: 'hidden'
          }}
        >
          <Link to="/addAddress">
            <div>
              <div>
                <div>
                  <span style={{ fontSize: '1.0rem' }}>收货人: 陈小杨 &nbsp;&nbsp;&nbsp;&nbsp;手机号码: 137 1048 0479</span>
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
                  广东广州番禺东环迎宾路832号ABP总部大厦1号楼2区802
                </div>
              </div>
              {/*<div>*/}
              {/*  <div style={{ color: '#c6c5c5' }}>请先选择地址或新增地址</div>*/}
              {/*</div>*/}
            </div>
          </Link>
        </div>
        {/*<Divider />*/}
        {/*图片订单编号价格等信息*/}
        {/*<div style={{ height: '50px', margin: '15px 0px 15px 15px' }}>图片订单编号价格等信息</div>*/}
        <Divider />
        {/*支付方式选择*/}
        <Radiobuttons />
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
            确定支付
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
)(ChoosePayWay);
