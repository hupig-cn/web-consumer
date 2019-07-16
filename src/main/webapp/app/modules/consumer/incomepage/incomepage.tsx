import React from 'react';
import Title from 'app/modules/public/title';
import QRCode from 'qrcode.react';
// tslint:disable-next-line: no-submodule-imports
import ReceiptRounded from '@material-ui/icons/ReceiptRounded';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
// tslint:disable-next-line: no-submodule-imports
import AssignmentTurnedInRounded from '@material-ui/icons/AssignmentTurnedInRounded';
import { Link } from 'react-router-dom';
import { getSession } from 'app/shared/reducers/authentication';
import { resetMerchant, getMyEntityMerchant } from 'app/requests/merchant/merchant.reducer';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import Error from 'app/modules/public/error';
import Info from 'app/modules/public/info';

export interface IIncomepageProp extends StateProps, DispatchProps {
}

export class Incomepage extends React.Component<IIncomepageProp> {
  componentDidMount() {
    this.props.getSession();
    this.props.resetMerchant();
    this.props.getMyEntityMerchant(this.props.account.id);
  }

  render() {
    const { account, merchantEntity } = this.props;
    return (
      <div
        style={{
          backgroundColor: '#fe4365',
          width: '100%',
          height: '100%',
          margin: '30px 0px 0px 0px',
          padding: '0px'
        }}
      >
        <Title name='园积分收款' back='/' />
        <div
          style={{
            width: '100%',
            height: '100%',
            zIndex: 100,
            position: 'fixed',
            left: '0px',
            top: '30px',
            backgroundColor: '#fe4365',
            padding: '15px'
          }}
        >
          <div>
            {account && account.login ? (
              <div>
                {merchantEntity.id > 0 && account.id.toString() === merchantEntity.userid ? (
                  <div>
                    {merchantEntity.state === '待审核' ? (
                      <Info/>
                    ) : (
                      <div>
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
                          <div style={{ color: '#fe4365', padding: '5px', backgroundColor: '#fe436515' }}>你收款 我送礼</div>
                          <div style={{ padding: '10px 10px 40px 10px' }}>手机扫一扫，向我付款</div>
                          <div>{merchantEntity.name}</div>
                          <QRCode
                            value={'http://app.yuanscore.com:8080/#id=' + merchantEntity.id}
                            size={200}
                            fgColor="#000000"
                            bgColor="#ffffff"
                          />
                          <div style={{ padding: '40px 70px 40px 70px' }}>
                            <span style={{ float: 'left', color: '#fe4365' }}>设置金额</span>
                            <span style={{ color: '#00000065' }}>￨</span>
                            <Link to="/exhibitionpage">
                              <span style={{ float: 'right', color: '#fe4365', fontWeight: 'normal' }}>保存图片</span>
                            </Link>
                          </div>
                          <div style={{ padding: '10px', textAlign: 'left', borderTop: '1px solid #00000025' }}>
                            <ReceiptRounded style={{ marginTop: '-5px' }}/>
                            收款记录
                            <ChevronRightRounded style={{ float: 'right' }}/>
                          </div>
                        </div>
                        <div style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', borderRadius: '3px' }}>
                          <div style={{ padding: '20px 10px 20px 10px', textAlign: 'left' }}>
                            <AssignmentTurnedInRounded style={{ fill: '#fe4365', marginTop: '-5px' }}/>
                            <span style={{ color: '#fe4365' }}>收款码贴纸</span>
                            <ChevronRightRounded style={{ float: 'right' }}/>
                            <span style={{ float: 'right' }}>3折园积分收款码</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
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
                      <div style={{ color: '#fe4365', padding: '5px', backgroundColor: '#fe436515' }}>错误</div>
                      <div style={{ padding: '10px 10px 40px 10px' }}>获取商家收款码失败</div>
                      <img src="./content/images/error.png"/>
                      <div style={{ padding: '40px 30px' }}>
                        <span>
                          你还不是商家，点击下方的
                          <Link to="/upmerchant">
                            <u>立即申请</u>
                          </Link>
                          ，成为商家，获取商家专属收款码。
                        </span>
                      </div>
                    </div>
                    <div style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', borderRadius: '3px' }}>
                      <div style={{ padding: '20px 10px 20px 10px', textAlign: 'left' }}>
                        <span style={{ color: '#fe4365' }}>成为商家，获取收款码</span>
                        <ChevronRightRounded style={{ float: 'right' }}/>
                        <Link to="/upmerchant">
                          <span style={{ float: 'right' }}>立即申请</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Error/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, merchant }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  merchantEntity: merchant.entity
});

const mapDispatchToProps = { getSession, getMyEntityMerchant, resetMerchant };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Incomepage);
