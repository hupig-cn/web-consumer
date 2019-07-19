import React from 'react';
import Title from 'app/modules/public/title';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Col, ModalBody, ModalFooter, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { RouteComponentProps } from 'react-router';
import { getlinkusers, authentication } from 'app/requests/basic/linkuser.reducer';

export interface IMysettingsProp extends StateProps, DispatchProps, RouteComponentProps<{}> {}

const validateIdCard = (idcard) =>{
  idcard = typeof idcard === 'string' ? idcard : String(idcard);
  let regx = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  if (regx.test(idcard)) {
    let sevenTeenIndex = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let front_seventeen = idcard.slice(0, 17);
    let eighteen = idcard.slice(17, 18);
    eighteen = isNaN(parseInt(eighteen)) ? eighteen.toLowerCase() : parseInt(eighteen);
    let remainder = 0;
    for (let i = 0; i < 17; i++) {
      remainder = (remainder += parseInt(front_seventeen.charAt(i)) * sevenTeenIndex[i]) % 11;
    }
    let remainderKeyArr = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    // @ts-ignore
    let remainderKey = remainderKeyArr[remainder] === 'X' ? remainderKeyArr[remainder].toLowerCase() : remainderKeyArr[remainder];
    if (eighteen === remainderKey) {
      return true;
    }
  }
  return false;
};

export class Mysettings extends React.Component<IMysettingsProp> {
  state = { imageUrl:'',file: '', fileContentType: '' };
  handleSubmit = (event, errors, { name,idcard }) => {
    const regname = /^[\u4e00-\u9fa5]+$/;
    name = name.trim();
    idcard = idcard.trim();
    if (!(regname.test(name)&&name.length>1&&name.length<5)) {
      toast.info('提示：请输入正确的姓名。');
    }else if (idcard.length!==18){
      toast.info('提示：请输入18位身份证号码');
    }else if (!validateIdCard(idcard)){
      toast.info('提示：请输入正确的身份证号码');
    }else{
      this.props.authentication(this.props.account.id,name,idcard)
      // @ts-ignore
        .then((name)=>{
          if (name.value.data==="认证成功"){
            toast.success('提示：认证成功');
            this.props.history.push('/mysettings');
          }else{
            toast.error('提示：'+name.value.data);
          }
        })
    }
  };

  componentDidMount() {
    this.props.getSession();
    this.props.getlinkusers(this.props.account.id);
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', margin: '30px 0px 0px 0px', textAlign: 'center' }}>
        <Title name="实名认证" back="/mysettings" />
        <div>
          <AvForm onSubmit={this.handleSubmit}>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                padding: '10px',
                fontSize: '1.2rem',
                borderBottom: '1px solid #00000015',
                marginTop: '35px'
              }}
            >
              身份认证申请表
            </div>
            <ModalBody>
              <Row>
                <Col md="12" style={{textAlign:"left",padding:'0px 20px'}}>
                  <AvField
                    name="name"
                    label={<span style={{ float: 'left', marginTop: '7px' }}>姓名：</span>}
                    placeholder={'请输入姓名'}
                    required
                    errorMessage="姓名不能为空!"
                    style={{ width: '80%', float: 'right' }}
                  />
                  <AvField
                    name="idcard"
                    label={<span style={{float:"left",width:'100%'}}>身份证号：</span>}
                    placeholder={'请输入18位身份证号码'}
                    required
                    errorMessage="身份证号不能为空!"
                    style={{ width: '100%', float: 'right' }}
                  />
                  <ModalFooter style={{ display: 'block', borderTop: '0px', textAlign:"center",marginTop:'50px'}}>
                    <Button type="submit" variant="contained" color="secondary" style={{ margin: '10px', width: '80%' }}>
                      申请认证
                    </Button>
                  </ModalFooter>
                </Col>
              </Row>
            </ModalBody>
          </AvForm>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication,linkuser }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  linkuserEntity: linkuser.entity
});

const mapDispatchToProps = { getSession,getlinkusers, authentication };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mysettings);
