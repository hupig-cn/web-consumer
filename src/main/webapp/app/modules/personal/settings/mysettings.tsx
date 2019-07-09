import React from 'react';
import Title from './title';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import { Link } from 'react-router-dom';

export class Mysettings extends React.Component {
  render() {
    const mydiv = {
      backgroundColor: '#ffffff',
      padding: '15px 5px 15px 15px',
      margin: '1px 0px'
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
        <Title />
        <div style={mydiv}>
          <span>头像</span>
          <ChevronRightRounded style={{ float: 'right' }} />
          <span style={{ float: 'right' }}>更换</span>
        </div>
        <div style={mydiv}>
          <span>昵称</span>
          <ChevronRightRounded style={{ float: 'right' }} />
          <span style={{ float: 'right' }}>我的名字</span>
        </div>
        <div style={mydiv}>
          <span>手机号</span>
          <ChevronRightRounded style={{ float: 'right' }} />
          <span style={{ float: 'right' }}>15000000000</span>
        </div>
        <div style={mydiv}>
          <span>真实姓名</span>
          <ChevronRightRounded style={{ float: 'right' }} />
          <span style={{ float: 'right' }}>无</span>
        </div>
        <div style={mydiv}>
          <span>推荐人</span>
          <ChevronRightRounded style={{ float: 'right' }} />
          <span style={{ float: 'right' }}>无</span>
        </div>
        <div style={{ backgroundColor: '#00000005', width: '100%', height: '10px' }} />
        <div style={mydiv}>
          <span>微信号</span>
          <ChevronRightRounded style={{ float: 'right' }} />
          <span style={{ float: 'right' }}>更换</span>
        </div>
        <div style={mydiv}>
          <span>支付宝账号</span>
          <ChevronRightRounded style={{ float: 'right' }} />
          <span style={{ float: 'right' }}>更换</span>
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
export default Mysettings;
