// 是否开启网络请求时的页面同步等待效果
import React from 'react';
import axios from 'axios';

// 是否开启网络请求时的页面同步等待效果（保留已渲染的body内容）
const APP_BODY_HOLD_WAIT = true;
// body填充等待(覆盖已渲染的内容，改由预定义wait内容填充body)
const APP_BODY_FILL_WAIT = true;
// 接口环境：布尔 true 或 false
export const DEBUG = false;

// const APP_SERVER_API_URL = 'http://139.196.100.121/yjfapi/web-business'; // SERVER_API_URL
const APP_SERVER_API_URL = 'services';
const DEBUG_APP_SERVER_API_URL = 'http://wskj.tpddns.cn:32767/api/web-business'; // SERVER_API_URL

// 各接口配置
export const Api = {
  tsxSettings: {
    api_debug: '',
    // 店铺信息
    api_shopinfo: '',
    data: { user: null, bankcard: null, profit: null, entrys: null },
    loading: APP_BODY_HOLD_WAIT,
    error: null
  },
  responseParse: (response: object, dataType: object) => {
    const objv = obj => Object.prototype.toString.call(obj) === '[object Object]';
    const arrv = arr => Object.prototype.toString.call(arr) === '[object Array]';

    // @ts-ignore
    if (response.data === undefined || response.data === null || response.data === '') {
      response['data'] = dataType;
    }
    // @ts-ignore
    if (arrv(response.data) && response.data['0'] !== undefined && objv(dataType)) {
      // @ts-ignore
      response['data'] = response.data['0'];
    }
    return response;
  }
};
const instance = axios.create({
  // 当创建实例的时候配置默认配置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  baseURL: DEBUG ? DEBUG_APP_SERVER_API_URL : APP_SERVER_API_URL,
  timeout: 5000,
  headers: { 'X-Requested-With': 'foobar' }
});

// 初始化
// instance.defaults.timeout = 2500;

const aiaxLoadTemplate = (n: boolean, props: any) => (
  <div style={{ width: '100vw', height: '100vh', textAlign: 'center' }}>
    {n ? (
      <div ws-container-id="nobody" style={{ height: '52vh', lineHeight: '96vh' }}>
        <div>{props.msgtext ? props.msgtext : '页面加载中'}</div>
      </div>
    ) : (
      ''
    )}
    <img
      style={{
        position: 'relative',
        top: '80%',
        backgroundColor: '#e0dddd',
        width: '100px',
        height: '50px',
        padding: '20px 30px',
        borderRadius: '30px'
      }}
      src="./content/images/loading2.gif"
    />
  </div>
);

const style = {
  opacity: 0.4,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: '50px',
  width: '100vw',
  height: '100vh',
  // lineHeight: '100vh',
  backgroundColor: '#FFF',
  textAlign: 'center',
  verticalAlign: 'middle',
  zIndex: 999 // 层级需低于顶部导航栏，否则导航栏 将被遮盖致使无法点击 返回上一页 功能
};

// @ts-ignore
instance.all = axios.all;
// @ts-ignore
instance.spread = axios.spread;

export const Axios = instance;
export function PathInfoParse(path) {
  return (path || window.location.pathname).substring(1).split('/');
}
export function ShowBodyPlaceholderHtml(props) {
  // @ts-ignore
  return <div style={style}>{aiaxLoadTemplate(true, props)}</div>;
}
export default function requestLoadingWait(props) {
  if (props.loading) {
    // @ts-ignore
    return <div style={style}>{aiaxLoadTemplate(false)}</div>;
  }
  return null;
}
