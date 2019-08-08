import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';

import LongMenu from '../public/longmenu';
import Nearbylistbox from './nearbylistbox';
import { findAllMerchant } from 'app/requests/merchant/merchant.reducer';
import { getPublicImg } from 'app/requests/basic/files.reducer';

/* vipkwd */
import '../../../static/css/common.scss';

export interface INearbyProp extends StateProps, DispatchProps {}

export class Nearby extends React.Component<INearbyProp> {
  state = { merchantEntity: [], startPage: 0, pageSize: 10 };
  componentDidMount() {
    this.props.getSession();
    this.props
      .findAllMerchant(this.state.startPage, this.state.pageSize)
      // @ts-ignore
      .then(val => {
        val.value.data.data.map(key => {
          const merchantEntity = this.state.merchantEntity;
          merchantEntity.push({
            id: key.id,
            name: key.name,
            merchantphoto: key.merchantphoto,
            businessid: key.businessid,
            city: key.city,
            rebate: key.rebate
          });
          this.setState({ merchantEntity, startPage: 1 });
        });
      });
    // tslint:disable-next-line: unnecessary-bind
    window.addEventListener('scroll', this.handleScroll.bind(this)); // 监听滚动
  }
  componentWillUnmount() {
    // 一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    // tslint:disable-next-line: unnecessary-bind
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll = e => {
    // tslint:disable-next-line: no-console
    if (
      e.srcElement.scrollingElement.clientHeight + e.srcElement.scrollingElement.scrollTop ===
      e.srcElement.scrollingElement.scrollHeight
    ) {
      this.props
        .findAllMerchant(this.state.startPage, this.state.pageSize)
        // @ts-ignore
        .then(val => {
          if (val.value.data.data !== undefined && undefined !== val.value.data.data.map) {
            const startPage: number = this.state.startPage + 1;
            val.value.data.data.map(key => {
              const merchantEntity = this.state.merchantEntity;
              merchantEntity.push({
                id: key.id,
                name: key.name,
                merchantphoto: key.merchantphoto,
                businessid: key.businessid,
                city: key.city,
                rebate: key.rebate
              });
              this.setState({ merchantEntity, startPage });
            });
          }
        });
    }
  };

  getimgs = key => {
    const img = [];
    this.props
      .getPublicImg(key)
      // @ts-ignore
      .then(photo => {
        img.push({ file: photo.value.data.file, fileContentType: photo.value.data.fileContentType });
        return img;
      });
  };

  render() {
    return (
      <div ws-container-id="nearby">
        <LongMenu />
        <Nearbylistbox state={this.state} getimgs={this.getimgs} />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, findAllMerchant, getPublicImg };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nearby);
