// 管理模块
import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';
import Title from 'app/modules/public/title';
import Enddiv from '../../shared/menu/enddiv';

// 专用接口请求模块
import { Axios, ShowBodyPlaceholderHtml } from 'app/request';
// import Utils from 'app/utils';

export interface IManageProp extends StateProps, DispatchProps {}

export class Manage extends React.Component<IManageProp> {
  state = { error: '', loading: true, progressive: true, data: [], showLiKey: 1 };
  constructor(props) {
    super(props);
    // 初始化接口数据结构
  }

  componentDidMount() {
    // TODO 注意此处路径层级
    // Axios 默认配置了根路径为：www.xxx.com/services
    // 故此处使用相对路径来拼接真实路径，最终为：www.xxx.com/content/doc/qa.json
    Axios.get('../content/doc/qa.json')
      .then(response => {
        this.setState({ loading: false, progressive: false, data: response.data });
      })
      .catch(error => {
        this.setState({ error: '页面载入错误' });
      });
  }

  changeLi = (e: any) => {
    const prevIk = 1 * this.state.showLiKey;
    const thisIk = 1 * e.target.getAttribute('id').substring(3);
    this.setState({ showLiKey: prevIk === thisIk ? 0 : thisIk });
  };

  render() {
    const state = this.state;
    // @ts-ignore
    if (state.progressive === true) {
      return (
        <div className="jh-personal">
          <Title name="问答中心" back="/" />
          <ShowBodyPlaceholderHtml msgtext={state.error} />
        </div>
      );
    }

    const qalist = state.data.map((item, index) => (
      <li
        key={index + 1}
        onClick={this.changeLi}
        style={{ borderBottom: '1px dashed #E6E6E6', cursor: 'pointer', listStyle: 'none', padding: '0 15px' }}
      >
        <span
          id={'ik_' + (index + 1)}
          style={{
            display: 'block',
            width: '90vw',
            fontWeight: 'bold',
            height: '35px',
            lineHeight: '35px'
          }}
        >
          {item.q}
        </span>
        {state.showLiKey === index + 1 ? (
          <div
            style={{
              color: '#999999',
              marginBottom: '20px'
            }}
          >
            {item.a}
          </div>
        ) : (
          <div
            style={{
              display: 'none',
              color: '#999999',
              marginBottom: '20px'
            }}
          >
            {item.a}
          </div>
        )}
      </li>
    ));

    return (
      <div className="jh-personal">
        <Title name="问答中心" back="/" />

        <div ws-container-id="main" style={{ fontSize: '0.9rem' }}>
          <div style={{ height: '140px', backgroundColor: '#F2F2F2' }}>
            <div
              style={{
                textIndent: '10px',
                width: '100vw',
                height: '40px',
                lineHeight: '45px',
                borderBottom: '1px solid #D6D6D6',
                textAlign: 'left'
              }}
            >
              联系客服
            </div>
            <div
              style={{
                height: '100px',
                lineHeight: '90px',
                width: '100vw'
              }}
            >
              <div
                style={{
                  overflow: 'hidden',
                  width: '50%',
                  paddingRight: '10px',
                  textAlign: 'right',
                  float: 'left'
                }}
              >
                <span
                  style={{
                    borderRadius: '50PX',
                    border: '1px solid #D6D6D6',
                    height: '35px',
                    lineHeight: '35px',
                    padding: '8px 10px'
                  }}
                >
                  微信 15515811581
                </span>
              </div>
              <div
                style={{
                  overflow: 'hidden',
                  width: '50%',
                  // paddingLeft: '10px',
                  textAlign: 'left'
                }}
              >
                <span
                  style={{
                    borderRadius: '50PX',
                    border: '1px solid #D6D6D6',
                    height: '35px',
                    lineHeight: '35px',
                    padding: '8px 10px'
                  }}
                >
                  电话 15515811581
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'block', clear: 'both', height: 0, width: 0 }} />
          <div>
            <div
              style={{
                textIndent: '10px',
                width: '100vw',
                height: '35px',
                lineHeight: '35px',
                borderBottom: '1px solid #D6D6D6',
                textAlign: 'left'
              }}
            >
              用户答疑
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: '0' }}>{qalist}</ul>
            </div>
          </div>
          <div>
            <img style={{ width: '100vw' }} src="./content/doc/qa_table_item2.png" alt="角色收益配比展示表" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, getSessionRE };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Manage);
