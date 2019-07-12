import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

import Ordertabs from './ordertabs';

export interface IOrderProp extends StateProps, DispatchProps {}

export class Order extends React.Component<IOrderProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div>
        <Ordertabs />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);