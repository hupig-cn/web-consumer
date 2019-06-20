import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import LongMenu from "app/shared/menu/longmenu";
import Quickaccess from "./quickaccess";
import Loopplayimg from "./loopplayimg";
import Homelabelcard from "./homelabelcard";
import Homequickaccessdown from "./homequickaccessdown";

export interface IHomeProp extends StateProps, DispatchProps {}

export class Home extends React.Component<IHomeProp> {
  componentDidMount() {
    this.props.getSession();
  }
  render() {
    return (
      <div style={{width: '100%',}}>
        <div style={{
          width: '100%',
          float: 'right',
          backgroundColor: '#f0f0f0',
        }}>
          <LongMenu />
          <Quickaccess />
          <Homequickaccessdown />
          <Loopplayimg />
          <Homelabelcard />
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
)(Home);
