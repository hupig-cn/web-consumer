import React from 'react';
import { Link } from 'react-router-dom';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
export class Error extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          left: '0px',
          backgroundColor: '#fe4365'
        }}
      >
        <div
          style={{
            width: '100%',
            height: 'auto',
            left: '0px',
            backgroundColor: '#fe4365',
            padding: '15px'
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              height: '100%',
              marginBottom: '20px',
              textAlign: 'center',
              borderRadius: '3px'
            }}
          >
            <div style={{ color: '#fe4365', padding: '5px', backgroundColor: '#fe436515' }}>提示</div>
            <div style={{ padding: '10px 10px 40px 10px' }}>提示信息</div>
            <img src="./content/images/info.png" />
            <div style={{ padding: '40px 30px' }}>
              <span>
                您的账户正在审核中，我们将在一到三个工作日内完成审核，请稍后。
                <br />
                点击
                <Link to="/">
                  <u>返回</u>
                </Link>
                ，跳转到主页查看更多信息。
              </span>
            </div>
          </div>
          <div style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', borderRadius: '3px' }}>
            <div style={{ padding: '20px 10px 20px 10px', textAlign: 'left' }}>
              <span style={{ color: '#fe4365' }}>升级圆帅，享更高收益！</span>
              <ChevronRightRounded style={{ float: 'right' }} />
              {/*<Link to='/'>*/}
              <span style={{ float: 'right' }}>立即申请</span>
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
