import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getOrderInfoByOrderId, getAllOrder, getUnpaidOrder, getPaidOrder, getRefundOrder } from 'app/requests/shopmall/shopmall.reducer';
import { toast } from 'react-toastify';
import Ordertabs from './ordertabs';

export interface IOrderProp extends StateProps, DispatchProps {}

export class Order extends React.Component<IOrderProp> {
  state = {
    getAllOrderList: [],
    getUnpaidOrderList: [],
    getPaidOrderList: [],
    getRefundOrderList: []
  };
  componentDidMount() {
    // @ts-ignore
    this.props.getSession().then(respone => {
      this.getAllOrder(respone.id);
      this.getUnpaidOrder(respone.id);
      this.getPaidOrder(respone.id);
      this.getRefundOrder(respone.id);
    });
  }

  getAllOrder(userid) {
    const result = this.props.getAllOrder(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.data) {
        this.setState({
          getAllOrderList: res.value.data.data
        });
      }
    });
  }

  getUnpaidOrder(userid) {
    const result = this.props.getUnpaidOrder(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.data) {
        this.setState({
          getUnpaidOrderList: res.value.data.data
        });
      }
    });
  }

  getPaidOrder(userid) {
    const result = this.props.getPaidOrder(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.data) {
        this.setState({
          getPaidOrderList: res.value.data.data
        });
      }
    });
  }

  getRefundOrder(userid) {
    const result = this.props.getRefundOrder(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.data) {
        this.setState({
          getRefundOrderList: res.value.data.data
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Ordertabs
          // @ts-ignore
          status={this.props.location.status}
          getAllOrderList={this.state.getAllOrderList}
          getUnpaidOrderList={this.state.getUnpaidOrderList}
          getPaidOrderList={this.state.getPaidOrderList}
          getRefundOrderList={this.state.getRefundOrderList}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, getOrderInfoByOrderId, getAllOrder, getUnpaidOrder, getPaidOrder, getRefundOrder };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
