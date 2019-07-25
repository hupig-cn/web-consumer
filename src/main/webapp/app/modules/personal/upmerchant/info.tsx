import React from 'react';
import { Link } from 'react-router-dom';
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
                您的账户还没有进行实名认证！
                <br />
                点击
                <Link to="/authentication">
                  <u>认证</u>
                </Link>
                ，进行实名认证后，才能进行商户申请。
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
