import React from 'react';
import Title from './title';
import QRCode from 'qrcode.react';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export interface ISharepageProp extends StateProps, DispatchProps {}

export class Sharepage extends React.Component<ISharepageProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const { account } = this.props;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Title />
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '0px',
            top: '0px',
            backgroundColor: '#a7bfbf',
            zIndex: 100,
            textAlign: 'center'
          }}
        >
          <img style={{ width: '100%', height: '220px' }} src="./content/images/sharepage.png" />
          <div style={{ paddingTop: '50px' }}>
            {account && account.login ? (
              <QRCode
                value={'http://app.yuanscore.com:8080/#id=' + account.id + '&share=' + account.login}
                size={200}
                fgColor="#00000098"
                bgColor="#a7bfbf"
              />
            ) : (
              <Link to="/login">
                <div
                  style={{ width: '200px', height: '200px', color: '#ffffff', textAlign: 'center', margin: '0 auto', lineHeight: '200px' }}
                >
                  <u>点击登录，生成邀请码</u>
                </div>
              </Link>
            )}
          </div>
          <div style={{ position: 'relative', width: '100%', top: '-250px', zIndex: -1 }}>
            <img style={{ width: '340px', height: '300px' }} src="./content/images/frame.png" />
          </div>
          <div style={{ marginTop: '-220px' }}>
            <label
              style={{
                color: '#ffffff',
                outline: 'none',
                border: '1px solid #ffffff',
                width: '100px',
                borderRadius: '5px'
              }}
            >
              扫码注册
            </label>
            <label
              style={{
                color: '#ffffff',
                outline: 'none',
                border: '1px solid #ffffff',
                width: '100px',
                margin: '0px 15px',
                borderRadius: '5px'
              }}
            >
              付款使用
            </label>
            <label
              style={{
                color: '#ffffff',
                outline: 'none',
                border: '1px solid #ffffff',
                width: '100px',
                borderRadius: '5px'
              }}
            >
              赠送积分
            </label>
          </div>
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
)(Sharepage);
