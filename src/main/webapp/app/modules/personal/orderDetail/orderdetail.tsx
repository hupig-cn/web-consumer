import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import LongMenu from 'app/shared/menu/longmenu';
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
            float: 'right',
            backgroundColor: '#f0f0f0'
          }}
        >
          <LongMenu />
          <OdLoopplayimg />
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
