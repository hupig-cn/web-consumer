import React from 'react';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
// tslint:disable-next-line: no-submodule-imports
import RemoveRounded from '@material-ui/icons/RemoveRounded';
import { Link, RouteComponentProps } from 'react-router-dom';
import { IRootState } from 'app/shared/reducers';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { getMyImg } from 'app/requests/basic/files.reducer';
import { getMyRecommendName, queryAlipay } from 'app/requests/basic/basic.reducer';
// tslint:disable-next-line: no-submodule-imports
import Dialog from '@material-ui/core/Dialog';
// tslint:disable-next-line: no-submodule-imports
import DialogTitle from '@material-ui/core/DialogTitle';
// tslint:disable-next-line: no-submodule-imports
import DialogContent from '@material-ui/core/DialogContent';
// tslint:disable-next-line: no-submodule-imports
import TextField from '@material-ui/core/TextField';
// tslint:disable-next-line: no-submodule-imports
import DialogActions from '@material-ui/core/DialogActions';
// tslint:disable-next-line: no-submodule-imports
import Button from '@material-ui/core/Button';
// tslint:disable-next-line: no-duplicate-imports
import { updateMyName } from 'app/shared/reducers/authentication';
import { toast } from 'react-toastify';
import { getlinkusers } from 'app/requests/basic/linkuser.reducer';
// tslint:disable-next-line: no-submodule-imports
import Avatar from '@material-ui/core/Avatar';

export interface IMysettingsProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Mysettings extends React.Component<IMysettingsProp> {
  state = { alipay: '未绑定', file: '', fileContentType: '', open: false, name: '无' };
  componentDidMount() {
    this.props.getSession();
    this.props
      .getSessionRE()
      // @ts-ignore
      .then(valueI => {
        valueI.payload.then(valueII => {
          if (valueII.data.imageUrl > 0) {
            this.props
              .queryAlipay(valueII.data.id)
              // @ts-ignore
              .then(mess => {
                this.setState({ alipay: mess.value.data });
              });
            this.props
              .getMyImg(valueII.data.imageUrl)
              // @ts-ignore
              .then(photo => {
                this.setState({
                  file: photo.value.data.file,
                  fileContentType: photo.value.data.fileContentType
                });
              });
          }
        });
      });
    this.props.getlinkusers(this.props.account.id);
    this.props
      .getMyRecommendName(this.props.account.id)
      // @ts-ignore
      .then(name => {
        this.setState({ name: name.value.data });
      });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleOk = () => {
    const name = document.getElementById('mysetting-remove-name') as HTMLInputElement;
    if (name.value.trim().length > 0) {
      // @ts-ignore
      this.props.updateMyName(this.props.account.id, this.props.account.login, name.value.trim()).then((result: any) => {
        if (result.value.data === '修改成功') {
          this.props.getSession();
          toast.success('提示：修改成功。');
        } else {
          toast.error(result.value.data);
        }
      });
    }
    this.setState({ open: false });
  };

  bindingWeChat = () => {
    toast.success('提示：用来绑定微信。');
  };
  bindingAlipay = () => {
    this.props.history.push('/personal');
    window.location.replace(
      'alipays://platformapi/startapp?' +
        'appId=20000067&' +
        'url=https%3A%2F%2Fopenauth.alipay.com%2Foauth2%2FpublicAppAuthorize.htm%3F' +
        'app_id%3D2019062565651444%26' +
        'scope%3Dauth_base%26' +
        'redirect_uri%3Dhttp%3A%2F%2Fapp.yuanscore.com%26' +
        'state%3D' +
        this.props.account.id
    );
  };

  render() {
    const { account, linkuserEntity } = this.props;
    const mydiv = {
      backgroundColor: '#ffffff',
      padding: '15px 5px 15px 15px',
      margin: '1px 0px',
      'text-align': 'right',
      overflow: 'auto'
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
          <Link to="/reimageurl" style={{ float: 'right', padding: 'inherit' }}>
            <span>更换</span>
            <ChevronRightRounded style={{ marginTop: '-4px' }} />
          </Link>
          <Avatar
            alt="photo"
            src={this.state.fileContentType ? `data:${this.state.fileContentType};base64,${this.state.file}` : ``}
            style={{ width: '50px', height: '50px', float: 'right' }}
          />
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>昵称</span>
          <div style={{ overflow: 'auto' }} onClick={this.handleClickOpen}>
            <span>{account.firstName}</span>
            <ChevronRightRounded style={{ float: 'right' }} />
          </div>
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>手机号</span>
          <span>{linkuserEntity.phone}</span>
          <RemoveRounded style={{ float: 'right' }} />
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>实名认证</span>
          {linkuserEntity.idcard ? (
            <div>
              <span>{linkuserEntity.name}</span>
              <RemoveRounded style={{ float: 'right' }} />
            </div>
          ) : (
            <Link to="/authentication">
              <span>未认证</span>
              <ChevronRightRounded style={{ float: 'right' }} />
            </Link>
          )}
        </div>
        <div style={mydiv}>
          <span style={{ float: 'left' }}>推荐人</span>
          <span>{this.state.name}</span>
          <RemoveRounded style={{ float: 'right' }} />
        </div>
        <div style={{ backgroundColor: '#00000005', width: '100%', height: '10px' }} />
        <div style={mydiv}>
          <span style={{ float: 'left' }}>微信账号</span>
          <div style={{ overflow: 'auto' }} onClick={this.bindingWeChat}>
            <span>绑定</span>
            <ChevronRightRounded style={{ float: 'right' }} />
          </div>
        </div>
        <div style={mydiv}>
          {this.state.alipay === '未绑定' ? (
            <div>
              <span style={{ float: 'left' }}>支付宝账号(未绑定)</span>
              <div style={{ overflow: 'auto' }} onClick={this.bindingAlipay}>
                <span>立即绑定</span>
                <ChevronRightRounded style={{ float: 'right' }} />
              </div>
            </div>
          ) : (
            <div>
              <span style={{ float: 'left' }}>支付宝账号</span>
              <span>已绑定</span>
              <RemoveRounded style={{ float: 'right' }} />
            </div>
          )}
        </div>
        <div style={{ backgroundColor: '#00000005', width: '100%', height: '10px' }} />
        <div style={mydiv}>
          <Link to="/logout">
            <div style={{ width: '100%', textAlign: 'center', paddingRight: '10px' }}>退出登陆</div>
          </Link>
        </div>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">修改昵称</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" id="mysetting-remove-name" label="新的昵称" type="name" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              取消
            </Button>
            <Button onClick={this.handleOk} color="secondary">
              确认
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ files, authentication, linkuser }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  filesEntity: files.entity,
  linkuserEntity: linkuser.entity
});

const mapDispatchToProps = { getSession, getMyImg, updateMyName, getlinkusers, getMyRecommendName, getSessionRE, queryAlipay };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mysettings);
