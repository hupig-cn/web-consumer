import React from 'react';
import SelectAddTitle from './selectAddressTitle';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import { getUserAddress } from 'app/requests/basic/basic.reducer';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';

export interface ISelectAddressProp extends StateProps, DispatchProps {}

export class SelectAddress extends React.Component<ISelectAddressProp> {
  state = {
    messages: []
  };

  componentDidMount() {
    // @ts-ignore
    this.props.getSession().then(respone => {
      // @ts-ignore
      this.props.getUserAddress(respone.id).then(res => {
        this.setState({
          messages: res.value.data.data
        });
      });
    });
  }

  render() {
    const mydiv = {
      backgroundColor: '#ffffff',
      padding: '30px 5px 15px 20px',
      margin: '1px 0px',
      height: '800px'
    };
    // tslint:disable-next-line: no-console
    console.log(this.state.messages);
    // tslint:disable-next-line: no-console
    console.log(this.state.messages);
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          margin: '0px 0px 0px 0px',
          padding: '0px'
        }}
      >
        <SelectAddTitle />
        <div style={mydiv}>
          <React.Fragment>
            {this.state.messages.map(({ address, consignee, mobile }) => (
              // tslint:disable-next-line: no-unused-expression
              <div>
                <div style={{ float: 'left' }}>
                  <div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                      {consignee}&nbsp;&nbsp;&nbsp;&nbsp;{mobile}
                    </span>
                    <span
                      style={{
                        margin: '0px 0px 0px 10px',
                        display: 'inline-block',
                        padding: '0px 0.14rem',
                        background: 'rgb(255, 70, 70)',
                        fontSize: '0.3rem',
                        color: 'white',
                        borderRadius: '20px'
                      }}
                    >
                      默认地址
                    </span>
                  </div>
                  <div
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                      color: 'rgb(102, 102, 102)',
                      marginTop: '0.1rem',
                      maxWidth: '320px'
                    }}
                  >
                    {address}
                  </div>
                </div>
                <ChevronRightRounded style={{ float: 'right', height: '35px' }} />
              </div>
            ))}
          </React.Fragment>
          <div style={{ backgroundColor: '#00000005', width: '100%' }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, getUserAddress };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAddress);
