import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { getOrderInfoByOrderId, getAllOrder, getUnpaidOrder, getPaidOrder, getRefundOrder } from 'app/requests/shopmall/shopmall.reducer';
import { toast } from 'react-toastify';
import Ordertabs from './ordertabs';

export interface IOrderProp extends StateProps, DispatchProps {}

export class Order extends React.Component<IOrderProp> {
  componentDidMount() {
    this.props.getSession();
  }

  getOrderInfoByOrderId = ({ userid }) => {
    const result = this.props.getOrderInfoByOrderId(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.code === 1) {
        toast.success('成功啦');
      } else {
        toast.error('错误：' + res.value.data.message.toString());
      }
    });
  };

  getAllOrder = ({ userid }) => {
    const result = this.props.getOrderInfoByOrderId(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.code === 1) {
        toast.success('成功啦');
      } else {
        toast.error('错误：' + res.value.data.message.toString());
      }
    });
  };

  getUnpaidOrder = ({ userid }) => {
    const result = this.props.getOrderInfoByOrderId(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.code === 1) {
        toast.success('成功啦');
      } else {
        toast.error('错误：' + res.value.data.message.toString());
      }
    });
  };

  getPaidOrder = ({ userid }) => {
    const result = this.props.getOrderInfoByOrderId(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.code === 1) {
        toast.success('成功啦');
      } else {
        toast.error('错误：' + res.value.data.message.toString());
      }
    });
  };

  getRefundOrder = ({ userid }) => {
    const result = this.props.getOrderInfoByOrderId(userid);
    // @ts-ignore
    // tslint:disable-next-line: no-shadowed-variable
    result.then(res => {
      if (res.value.data.code === 1) {
        toast.success('成功啦');
      } else {
        toast.error('错误：' + res.value.data.message.toString());
      }
    });
  };

  render() {
    return (
      <div>
        <Ordertabs
          getOrderInfoByOrderId={this.getOrderInfoByOrderId}
          getAllOrder={this.getAllOrder}
          getUnpaidOrder={this.getUnpaidOrder}
          getPaidOrder={this.getPaidOrder}
          getRefundOrder={this.getRefundOrder}
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
