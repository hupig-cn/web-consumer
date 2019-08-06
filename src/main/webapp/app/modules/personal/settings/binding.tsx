import React from 'react';
import QRCode from 'qrcode.react';
import Title from 'app/modules/public/title';
import { Button } from '@material-ui/core';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

export interface IBindingProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export class Binding extends React.Component<IBindingProp> {
  componentDidMount() {
    this.props.getSession();
  }

  goto() {
    window.location.replace('weixin://scanQRCode');
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          backgroundColor: '#ffffff',
          zIndex: 100,
          paddingTop: '35px'
        }}
      >
        <Title name="微信绑定" back="/mysettings" />
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          <div style={{ textAlign: 'center', padding: '30px 0px' }}>
            <p style={{ width: '80%', margin: '20px auto' }}>
              此二维码用于圆积分绑定微信账户使用
              <br />
              请勿分享给他人
            </p>
            <QRCode
              value={'http://app.yuanscore.com/?bindingWeChat=1&userid=' + this.props.account.id}
              renderAs="canvas"
              size={200}
              fgColor="#000000"
              bgColor="#ffffff"
            />
            <p style={{ width: '80%', margin: '20px auto' }}>
              绑定账户：
              <span style={{ color: '#fe4365' }}>{this.props.account.login}</span>
            </p>
            <p style={{ width: '80%', margin: '20px auto' }}>
              截图后-打开微信客户端扫一扫
              <br />
              识别图中二维码
            </p>
          </div>
          <div id="saveImage">&nbsp;</div>
          <Button
            variant="contained"
            color={'secondary'}
            style={{ position: 'fixed', top: '80%', left: '20%', width: '60%' }}
            onClick={this.goto}
          >
            点击可打开微信扫一扫
          </Button>
        </div>
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
)(Binding);
