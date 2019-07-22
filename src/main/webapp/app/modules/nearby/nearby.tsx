import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

import LongMenu from '../public/longmenu';
import Nearbytabs from './nearbytabs';

/* vipkwd */
import '../../../static/css/common.scss';
import '../../../static/css/nearby.scss';

export interface INearbyProp extends StateProps, DispatchProps {}

export class Nearby extends React.Component<INearbyProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div ws-container-id="nearby">
        <LongMenu />
        <Nearbytabs />
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
)(Nearby);
