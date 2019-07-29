import React from 'react';
import SelectAddTitle from './selectAddressTitle';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import { getUserAddress } from 'app/requests/basic/basic.reducer';
import { getSession } from 'app/shared/reducers/authentication';
import { connect } from 'react-redux';
// tslint:disable-next-line: no-submodule-imports
import CssBaseline from '@material-ui/core/CssBaseline';
// tslint:disable-next-line: no-submodule-imports
import Typography from '@material-ui/core/Typography';
// tslint:disable-next-line: no-submodule-imports
import Paper from '@material-ui/core/Paper';
// tslint:disable-next-line: no-submodule-imports
import List from '@material-ui/core/List';
// tslint:disable-next-line: no-submodule-imports
import ListItem from '@material-ui/core/ListItem';
// tslint:disable-next-line: no-submodule-imports
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// tslint:disable-next-line: no-submodule-imports
import ListItemText from '@material-ui/core/ListItemText';
// tslint:disable-next-line: no-submodule-imports
import Avatar from '@material-ui/core/Avatar';
import { Link, RouteComponentProps } from 'react-router-dom';
import Title from 'app/modules/public/title';

export interface ISelectAddressProp extends StateProps, DispatchProps {}

export class SelectAddress extends React.Component<ISelectAddressProp> {
  state = {
    messages: [],
    getMessage: false
  };

  componentDidMount() {
    // @ts-ignore
    this.props.getSession().then(respone => {
      // @ts-ignore
      this.props.getUserAddress(respone.id).then(res => {
        if (res.value.data.data) {
          this.setState({
            messages: res.value.data.data,
            getMessage: true
          });
        }
      });
    });
  }

  render() {
    const list = {
      fontFamily: '黑体',
      padding: 0
    };
    const paper = {
      paddingBottom: 0,
      boxShadow: 'none',
      marginTop: 36
    };
    return (
      <React.Fragment>
        <SelectAddTitle
          // @ts-ignore
          productid={this.props.location.productid !== null ? this.props.location.productid : null}
          // @ts-ignore
          cards={this.props.location.cards !== null ? this.props.location.cards : null}
        />
        <CssBaseline />
        <Paper square style={paper}>
          {this.state.getMessage === true ? (
            <List style={list}>
              {this.state.messages.map(({ id, address, consignee, mobile, isdefault, areaid, areaName }) => (
                <React.Fragment key={id}>
                  <Link
                    // tslint:disable-next-line: jsx-self-close
                    id={'app-modules-consumer-quickaccess-button-link-addAddress-' + id}
                    to={{
                      pathname: '/addAddress',
                      id: { id },
                      address: { address },
                      consignee: { consignee },
                      mobile: { mobile },
                      isdefault: { isdefault },
                      areaid: { areaid },
                      areaName: { areaName },
                      productid: this.props.location.productid !== null ? this.props.location.productid : null,
                      cards: this.props.location.cards !== null ? this.props.location.cards : null
                    }}
                  />
                  <ListItem
                    button
                    style={{ height: '80px', borderBottom: '1px solid #f0f0f0', position: 'relative' }}
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={() => {
                      document.getElementById('app-modules-consumer-quickaccess-button-link-addAddress-' + id).click();
                    }}
                  >
                    <ListItemAvatar>
                      {isdefault === true ? (
                        <Avatar
                          alt="默认收货地址"
                          src={'./content/images/sys3.png'}
                          style={{
                            borderRadius: 0,
                            width: '44px',
                            height: '44px',
                            marginRight: 10
                          }}
                        />
                      ) : (
                        <Avatar
                          alt="默认收货地址"
                          src={'./content/images/sys4.png'}
                          style={{
                            borderRadius: 0,
                            width: '44px',
                            height: '44px',
                            marginRight: 10
                          }}
                        />
                      )}
                    </ListItemAvatar>
                    <ListItemText
                      style={{
                        margin: '0 auto',
                        height: '100%'
                      }}
                      primary={'收货人：' + consignee}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" style={{ width: '100%' }} color="textPrimary">
                            <p
                              style={{
                                marginTop: '10px',
                                width: '100%',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                marginBottom: 0
                              }}
                            >
                              {address}
                            </p>
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '8px',
                        fontSize: '0.875rem',
                        right: '32px',
                        width: 'auto',
                        color: '#00000095'
                      }}
                    >
                      手机号码：{mobile}
                    </span>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          ) : (
            <div>当前用户无默认收货地址</div>
          )}
        </Paper>
      </React.Fragment>
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
