import './consumer.scss';

import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import Home from '../home/home';
import Enddiv from '../../shared/menu/enddiv';

export interface IConsumerProp extends StateProps, DispatchProps {}

export class Consumer extends React.Component<IConsumerProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div id="jh-body">
        <Home />
        <Enddiv />
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
)(Consumer);
