import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession, getSessionRE } from 'app/shared/reducers/authentication';

import Users from './users';
import Orders from './orders';
import Advertising from './advertising';
import VipService from './vipservice';
import Mytool from 'app/modules/personal/mytool';
import Error from 'app/modules/public/error';
import { getMyImg } from 'app/requests/basic/files.reducer';

export interface IPersonalProp extends StateProps, DispatchProps {}

export class Personal extends React.Component<IPersonalProp> {
  state = { file: '', fileContentType: '' };
  componentDidMount() {
    this.props.getSession();
    this.props
      .getSessionRE()
      // @ts-ignore
      .then(valueI => {
        valueI.payload.then(valueII => {
          if (valueII.data.imageUrl > 0) {
            this.props
              .getMyImg(valueII.data.imageUrl)
              // @ts-ignore
              .then(photo => {
                this.setState({
                  file: photo.value.data.file,
                  fileContentType: photo.value.data.fileContentType
                });
              });
          }
        });
      });
  }

  render() {
    const { account } = this.props;
    return (
      <div>
        {account && account.login ? (
          <div className="jh-personal">
            <Users account={account} state={this.state} />
            <Orders />
            <Advertising />
            <VipService />
            <Mytool />
          </div>
        ) : (
          <Error />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authentication, files }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  filesEntity: files.entity
});

const mapDispatchToProps = { getSession, getMyImg, getSessionRE };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personal);
