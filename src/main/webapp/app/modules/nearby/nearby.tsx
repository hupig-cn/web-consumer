import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

import LongMenu from '../public/longmenu';
import Nearbylistbox from './nearbylistbox';

/* vipkwd */
import '../../../static/css/common.scss';

export interface INearbyProp extends StateProps, DispatchProps {}

export class Nearby extends React.Component<INearbyProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div ws-container-id="nearby">
        <LongMenu />
        <Nearbylistbox />
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
