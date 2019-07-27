import React from 'react';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import { Link, RouteComponentProps } from 'react-router-dom';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';

export interface IPayPassSetedProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class PayPassSeted extends React.Component<IPayPassSetedProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const mydiv = {
      backgroundColor: '#ffffff',
      padding: '15px 5px 15px 15px',
      margin: '1px 0px',
      'text-align': 'right',
      overflow: 'auto'
    };

    return (
      <div>
        <div
          style={{
            backgroundColor: '#00000010',
            width: '100%',
            height: '100%',
            margin: '30px 0px 0px 0px',
            padding: '0px'
          }}
        >
          <Title name="设置支付密码" back="/mysettings" />
          <div style={mydiv}>
            <span style={{ float: 'left' }}>修改支付密码</span>
            <Link to="/updatePayPass">
              <span>前往修改</span>
              <ChevronRightRounded style={{ float: 'right' }} />
            </Link>
          </div>
          <div style={mydiv}>
            <span style={{ float: 'left' }}>忘记支付密码</span>
            <Link to="/sendCodePayPass">
              <span>前往重置</span>
              <ChevronRightRounded style={{ float: 'right' }} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayPassSeted);
