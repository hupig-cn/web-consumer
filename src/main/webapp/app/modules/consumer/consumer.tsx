import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import LongMenu from '../public/longmenu';
import Quickaccess from './quickaccess';

export interface IConsumerProp extends StateProps, DispatchProps {}

export class Consumer extends React.Component<IConsumerProp> {
  componentDidMount() {
    this.props.getSession();
  }
  render() {
    return (
      <div>
        <LongMenu />
        <Quickaccess />
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
)(Consumer);
