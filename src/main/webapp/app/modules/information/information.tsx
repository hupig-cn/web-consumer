import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import Title from './title';
import Informationlistbox from 'app/modules/information/informationlistbox';
import Selects from 'app/modules/information/selects';
import Error from 'app/modules/public/error';
import { Informations } from 'app/modules/information/informations';

export interface IInformationProp extends StateProps, DispatchProps {}

export class Information extends React.Component<IInformationProp> {
  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const { account } = this.props;
    return (
      <div>
        {account && account.login ? (
          <div className="jh-information">
            <Title />
            {/*<Selects/>*/}
            <Informations />
          </div>
        ) : (
          <Error />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Information);
