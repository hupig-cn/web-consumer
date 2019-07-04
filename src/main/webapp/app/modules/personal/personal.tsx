import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

import Users from './users';
import Orders from './orders';
import Advertising from './advertising';
import VipService from './vipservice';
import Mytool from 'app/modules/personal/mytool';

export interface IPersonalProp extends StateProps, DispatchProps {}

export class Personal extends React.Component<IPersonalProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const { account } = this.props;
    return (
      <div className="jh-personal">
        <Users login={account && account.login ? true : false} account={account} />
        <Orders />
        <Advertising />
        <VipService />
        <Mytool />
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
)(Personal);
