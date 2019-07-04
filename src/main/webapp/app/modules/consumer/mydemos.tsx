import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import { Button } from '@material-ui/core';
import { IRootState } from 'app/shared/reducers';
import { createEntityBasic, deleteEntityBasic, updateEntityBasic, getEntityBasic } from 'app/requests/basic/basic.reducer';
import {
  createEntityMerchant,
  deleteEntityMerchant,
  updateEntityMerchant,
  getEntityMerchant
} from 'app/requests/merchant/merchant.reducer';
import {
  createEntityShopmall,
  deleteEntityShopmall,
  updateEntityShopmall,
  getEntityShopmall
} from 'app/requests/shopmall/shopmall.reducer';

export interface IMydemosProp extends StateProps, DispatchProps {}

export class Mydemos extends React.Component<IMydemosProp> {
  componentDidMount() {
    this.props.getSession();
  }
  render() {
    let styles = { width: 'calc(100% - 20px)', margin: '10px' };
    const BASICPOST = () => {
      console.log('调用接口BASIC-POST');
      this.props.createEntityBasic(this.props.account.id);
    };
    const BASICDELETE = () => {
      console.log('调用接口BASIC-DELETE');
      this.props.deleteEntityBasic(this.props.mystringEntity.name);
    };
    const BASICPUT = () => {
      console.log('调用接口BASIC-PUT');
      this.props.updateEntityBasic(this.props.account.id);
    };
    const BASICGET = () => {
      console.log('调用接口BASIC-GET');
      this.props.getEntityBasic(this.props.mystringEntity.name);
    };
    const MERCHANTPOST = () => {
      console.log('调用接口MERCHANT-POST');
      this.props.createEntityMerchant(this.props.account.id);
    };
    const MERCHANTDELETE = () => {
      console.log('调用接口MERCHANT-DELETE');
      this.props.deleteEntityMerchant(this.props.mystringEntity.name);
    };
    const MERCHANTPUT = () => {
      console.log('调用接口MERCHANT-PUT');
      this.props.updateEntityMerchant(this.props.account.id);
    };
    const MERCHANTGET = () => {
      console.log('调用接口MERCHANT-GET');
      this.props.getEntityMerchant(this.props.mystringEntity.name);
    };
    const SHOPMALLPOST = () => {
      console.log('调用接口SHOPMALL-POST');
      this.props.createEntityShopmall(this.props.account.id);
    };
    const SHOPMALLDELETE = () => {
      console.log('调用接口SHOPMALL-DELETE');
      this.props.deleteEntityShopmall(this.props.mystringEntity.name);
    };
    const SHOPMALLPUT = () => {
      console.log('调用接口SHOPMALL-PUT');
      this.props.updateEntityShopmall(this.props.account.id);
    };
    const SHOPMALLGET = () => {
      console.log('调用接口SHOPMALL-GET');
      this.props.getEntityShopmall(this.props.mystringEntity.name);
    };
    return (
      <div>
        <Button onClick={BASICPOST} style={styles} variant="contained" color="primary">
          这是一个(BASIC)的(POST)测试按钮
        </Button>
        <Button onClick={BASICDELETE} style={styles} variant="contained" color="secondary">
          这是一个(BASIC)的(DELETE)测试按钮
        </Button>
        <Button onClick={BASICPUT} style={styles} variant="contained" color="default">
          这是一个(BASIC)的(PUT)测试按钮
        </Button>
        <Button onClick={BASICGET} style={styles} variant="contained" color="default">
          这是一个(BASIC)的(GET)测试按钮
        </Button>
        <Button onClick={MERCHANTPOST} style={styles} variant="contained" color="primary">
          这是一个(MERCHANT)的(POST)测试按钮
        </Button>
        <Button onClick={MERCHANTDELETE} style={styles} variant="contained" color="secondary">
          这是一个(MERCHANT)的(DELETE)测试按钮
        </Button>
        <Button onClick={MERCHANTPUT} style={styles} variant="contained" color="default">
          这是一个(MERCHANT)的(PUT)测试按钮
        </Button>
        <Button onClick={MERCHANTGET} style={styles} variant="contained" color="default">
          这是一个(MERCHANT)的(GET)测试按钮
        </Button>
        <Button onClick={SHOPMALLPOST} style={styles} variant="contained" color="primary">
          这是一个(SHOPMALL)的(POST)测试按钮
        </Button>
        <Button onClick={SHOPMALLDELETE} style={styles} variant="contained" color="secondary">
          这是一个(SHOPMALL)的(DELETE)测试按钮
        </Button>
        <Button onClick={SHOPMALLPUT} style={styles} variant="contained" color="default">
          这是一个(SHOPMALL)的(PUT)测试按钮
        </Button>
        <Button onClick={SHOPMALLGET} style={styles} variant="contained" color="default">
          这是一个(SHOPMALL)的(GET)测试按钮
        </Button>
      </div>
    );
  }
}
const mapStateToProps = ({ authentication, mystring }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  mystringEntity: mystring.entity
});

const mapDispatchToProps = {
  getSession,
  createEntityBasic,
  deleteEntityBasic,
  updateEntityBasic,
  getEntityBasic,
  createEntityMerchant,
  deleteEntityMerchant,
  updateEntityMerchant,
  getEntityMerchant,
  createEntityShopmall,
  deleteEntityShopmall,
  updateEntityShopmall,
  getEntityShopmall
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mydemos);
