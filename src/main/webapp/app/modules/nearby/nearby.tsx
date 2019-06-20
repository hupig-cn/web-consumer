import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

import LongMenu from "app/shared/menu/longmenu";
import Nearbytabs from "./nearbytabs";

export interface INearbyProp extends StateProps, DispatchProps {}

export class Nearby extends React.Component<INearbyProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    return (
      <div className="jh-nearby">
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
