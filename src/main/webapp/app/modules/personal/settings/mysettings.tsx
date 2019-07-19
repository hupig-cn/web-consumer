import React from 'react';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
// tslint:disable-next-line: no-submodule-imports
import RemoveRounded from '@material-ui/icons/RemoveRounded';
import { Link } from 'react-router-dom';
import { IRootState } from 'app/shared/reducers';
import { getSession,getSessionRE } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { getMyImg } from 'app/requests/basic/files.reducer';
import { getMyRecommendName } from 'app/requests/basic/basic.reducer';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { updateMyName } from 'app/shared/reducers/authentication';
import { toast } from "react-toastify";
import { getlinkusers } from 'app/requests/basic/linkuser.reducer';

export interface IMysettingsProp extends StateProps, DispatchProps {}

export class Mysettings extends React.Component<IMysettingsProp> {
  state = { file: '', fileContentType: '',open:false ,name: '无'};
  componentDidMount() {
    this.props.getSession();
    this.props.getSessionRE()
    // @ts-ignore
      .then((valueI)=>{
        valueI.payload.then((valueII)=>{
          if (valueII.data.imageUrl > 0){
            this.props.getMyImg(valueII.data.imageUrl)
            // @ts-ignore
              .then(photo => {
                this.setState({
                  file: photo.value.data.file,
                  fileContentType: photo.value.data.fileContentType
                });
              });
          }
        })
      });
    this.props.getlinkusers(this.props.account.id);
    this.props.getMyRecommendName(this.props.account.id)
    // @ts-ignore
      .then((name)=>{
        this.setState({name:name.value.data})
      })
  }
  handleClickOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
    this.setState({open:false});
  };
  handleOk = () => {
    var name = document.getElementById('mysetting-remove-name')as HTMLInputElement;
    if (name.value.trim().length>0){
      // @ts-ignore
      this.props.updateMyName(this.props.account.id, this.props.account.login,name.value.trim()).then((result: any) => {
        if (result.value.data === '修改成功') {
          this.props.getSession();
          toast.success('提示：修改成功。');
        } else {
          toast.error(result.value.data);
        }
      });
    }
    this.setState({open:false});
  };

  render() {
    const { account,linkuserEntity } = this.props;
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
          <div style={{overflow:"auto"}} onClick={this.handleClickOpen}>
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
          {linkuserEntity.idcard ?(
            <div>
              <span>{linkuserEntity.name}</span>
              <RemoveRounded style={{ float: 'right' }} />
            </div>
          ):(
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
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">修改昵称</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="mysetting-remove-name"
              label="新的昵称"
              type="name"
              fullWidth
            />
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

const mapStateToProps = ({ files, authentication,linkuser }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  filesEntity: files.entity,
  linkuserEntity: linkuser.entity,
});

const mapDispatchToProps = { getSession, getMyImg, updateMyName,getlinkusers,getMyRecommendName,getSessionRE};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mysettings);
