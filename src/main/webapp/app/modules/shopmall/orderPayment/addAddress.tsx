import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import TextField from '@material-ui/core/TextField';
import Title from 'app/modules/public/title';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/core/SvgIcon/SvgIcon';
// tslint:disable-next-line: no-submodule-imports
import Switch from '@material-ui/core/Switch';
// tslint:disable-next-line: no-submodule-imports
import Button from '@material-ui/core/Button';
import { getSession } from 'app/shared/reducers/authentication';
import { getUserAddress } from 'app/requests/basic/basic.reducer';
import { connect } from 'react-redux';

export interface IAddAddressProp extends StateProps, DispatchProps {}

export class AddAddress extends React.Component<IAddAddressProp> {
  state = {
    messages: []
  };

  componentDidMount() {
    // @ts-ignore
    this.props.getSession().then(respone => {
      // @ts-ignore
      this.props.getUserAddress(respone.id).then(res => {
        this.setState({
          messages: res.value.data.data
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Title name="新增地址" back="/selectAddress" />
        <form
          style={{
            margin: '45px 0px 0px 0px',
            display: 'flex',
            flexWrap: 'wrap'
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label="收货人"
            style={{ margin: 8 }}
            placeholder="请填写收货人"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="phoneNumber"
            label="手机号码"
            style={{ margin: 8 }}
            placeholder="请填写手机号码"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="location"
            label="所在地区"
            style={{ margin: 8 }}
            placeholder="请填写所在地区"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="address"
            label="详细地址"
            style={{ margin: 8 }}
            placeholder="街道、楼牌号等"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <div style={{ height: '56px', width: '100%', margin: '15px 0px 0px 15px', position: 'relative' }}>
            <span>设置默认地址</span>
            <ChevronRightRounded style={{ float: 'right' }} />
            <div style={{ position: 'relative', float: 'right', bottom: '7px', left: '25px' }}>
              <Switch />
            </div>
          </div>
        </form>
        <div
          style={{
            position: 'fixed',
            bottom: '0px',
            zIndex: 1000,
            width: '100%',
            backgroundColor: '#ffffff',
            height: '50px'
          }}
        >
          <Button
            style={{
              backgroundColor: '#fe4365',
              color: '#ffffff',
              width: '100%',
              fontSize: '1rem',
              height: '100%'
            }}
          >
            保存地址
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, getUserAddress };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAddress);
