import React from 'react';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
// tslint:disable-next-line: no-submodule-imports
import DoneRounded from '@material-ui/icons/DoneRounded';
import { Link } from 'react-router-dom';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { getMyImg } from 'app/requests/basic/files.reducer';

export interface IMysettingsProp extends StateProps, DispatchProps {}

export class Mysettings extends React.Component<IMysettingsProp> {
  state = { file: '', fileContentType: '' };
  componentDidMount() {
    this.props.getSession();
    this.props
      .getMyImg(this.props.account.imageUrl)
      // @ts-ignore
      .then(photo => {
        this.setState({ file: photo.value.data.file, fileContentType: photo.value.data.fileContentType });
      });
  }
  render() {
    const { account } = this.props;
    const mydiv = {
      backgroundColor: '#ffffff',
      padding: '15px 5px 15px 15px',
      margin: '1px 0px',
      'text-align': 'right'
    };
    return (
      <div
        style={{
          backgroundColor: '#00000010',
          width: '100%',
          height: '100%',
          margin: '30px 0px 0px 0px',
          padding: '0px'
        }}
      >
        <Title name="设置" back="/personal" />
        <div style={mydiv}>
          <span style={{ float: 'left', marginTop: '16px' }}>头像</span>
          <img
            style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }}
            src={`data:${this.state.fileContentType};base64,${this.state.file}`}
          />
          <Link to="/reimageurl">
            <span>更换</span>
            <ChevronRightRounded style={{ marginTop: '-4px' }} />
          </Link>
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>昵称</span>
          <span>{account.firstName}</span>
          <ChevronRightRounded style={{ float: 'right' }} />
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>手机号</span>
          <span>15000000000</span>
          <DoneRounded style={{ float: 'right' }} />
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>实名认证</span>
          <span>无</span>
          <ChevronRightRounded style={{ float: 'right' }} />
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>推荐人</span>
          <span>无</span>
          <ChevronRightRounded style={{ float: 'right' }} />
        </div>
        <div style={{ backgroundColor: '#00000005', width: '100%', height: '10px' }} />
        <div style={mydiv}>
          <span style={{ float: 'left' }}>微信号</span>
          <span>更换</span>
          <ChevronRightRounded style={{ float: 'right' }} />
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>支付宝账号</span>
          <span>更换</span>
          <ChevronRightRounded style={{ float: 'right' }} />
        </div>
        <div style={{ backgroundColor: '#00000005', width: '100%', height: '10px' }} />
        <div style={mydiv}>
          <Link to="/logout">
            <div style={{ width: '100%', textAlign: 'center', paddingRight: '10px' }}>退出登陆</div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ files, authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  filesEntity: files.entity
});

const mapDispatchToProps = { getSession, getMyImg };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mysettings);
