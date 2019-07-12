import React from 'react';
import { Link } from "react-router-dom";
import AssignmentTurnedInRounded from "@material-ui/core/SvgIcon/SvgIcon";
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
export class Error extends React.Component {
  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        left: '0px',
        backgroundColor: '#fe4365',
      }}>
        <div style={{
          width: '100%',
          height: 'auto',
          left: '0px',
          backgroundColor: '#fe4365',
          padding: '15px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            width: '100%',
            height: '100%',
            marginBottom: '20px',
            textAlign: 'center',
            borderRadius: '3px'
          }}>
            <div style={{ color: '#fe4365', padding: '5px', backgroundColor: '#fe436515' }}>
              错误
            </div>
            <div style={{ padding: '10px 10px 40px 10px' }}>
              拒绝访问
            </div>
            <img src='./content/images/error.png' />
            <div style={{ padding: '40px 30px' }}>
              <span>你还没有登录系统，点击<Link to='/login'><u>登录</u></Link>，进行登录后在才能使用此模块。</span>
            </div>
          </div>
          <div style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', borderRadius: '3px' }}>
            <div style={{ padding: '20px 10px 20px 10px', textAlign: 'left' }}>
              <span style={{ color: '#fe4365' }}>我还没有账号？</span>
              <ChevronRightRounded style={{ float: 'right' }}/>
              <Link to='/register'>
              <span style={{ float: 'right' }}>立即注册</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
