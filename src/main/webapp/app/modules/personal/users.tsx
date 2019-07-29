import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import Avatar from '@material-ui/core/Avatar';
// tslint:disable-next-line: no-submodule-imports
import ShoppingCartRounded from '@material-ui/icons/ShoppingCartRounded';
// tslint:disable-next-line: no-submodule-imports
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      backgroundColor: '#fe4365',
      height: '100%',
      '& button': {
        marginTop: 4,
        outline: 'none',
        marginBottom: 4,
        color: '#fffde5',
        fill: '#fffde5',
        height: '100%'
      },
      '& svg': {
        width: 30,
        height: 30
      },
      '& span': {
        marginTop: 3
      }
    },
    bigAvatar: {
      margin: '8px 0px 0px 15px',
      float: 'left',
      fill: '#fffde5',
      width: '50px',
      height: '50px'
    },
    namePlusSetting: {
      width: 'calc(100% - 70px)',
      height: '60px',
      float: 'right',
      padding: '12px 10px 0px 0px'
    },
    nameOne: {
      float: 'left',
      width: '100%',
      '& button': {
        '& span': {
          '& svg': {
            fill: '#fffde5'
          }
        }
      }
    },
    name: {
      color: '#fffde5',
      float: 'left',
      width: '100%'
    },
    login: {
      color: '#fffde5',
      float: 'left',
      fontSize: '0.7rem'
    }
  })
);

export default function LongMenu(props) {
  const classes = useStyles();
  const { account, state, userassets, merchant } = props;

  // tslint:disable-next-line: no-shadowed-variable
  function names(partner: boolean, merchant: boolean) {
    let name: string = account.firstName;
    if (name.length > 4) {
      name = name.substr(0, 4) + '...';
    }
    if (merchant) {
      name = name.toString() + '（商户）';
    }
    if (partner) {
      name = name.toString() + '（圆帅）';
    }
    return name;
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: '#fe4365',
          height: '60px',
          position: 'fixed',
          top: '0px',
          width: '100%',
          zIndex: 1000
        }}
      >
        <Avatar
          alt="photo"
          src={state.fileContentType ? `data:${state.fileContentType};base64,${state.file}` : ``}
          className={classes.bigAvatar}
        />
        <div className={classes.namePlusSetting}>
          <span className={classes.name}>
            {merchant.id > 0 && account.id.toString() === merchant.userid && merchant.state !== '待审核'
              ? names(state.partner, true)
              : names(state.partner, false)}
            <Link style={{ float: 'right' }} to="/mysettings">
              <SettingsRounded style={{ fill: '#fffde5' }} />
            </Link>
            <span style={{ float: 'right', width: '5px', height: '5px' }} />
            <Link style={{ float: 'right' }} to="/shopCar">
              <ShoppingCartRounded style={{ fill: '#fffde5' }} />
            </Link>
          </span>
          <div className={classes.login}>{account.login}</div>
        </div>
      </div>
      <BottomNavigation showLabels style={{ position: 'fixed', top: '58px', height: 'auto', zIndex: 1000 }} className={classes.root}>
        <BottomNavigationAction label="积分" value="scan" icon={userassets.integral} />
        <BottomNavigationAction label="余额" value="pay" icon={userassets.balance} />
        <BottomNavigationAction label="优惠卷" value="share" icon={userassets.couponsum} />
      </BottomNavigation>
      <div style={{ height: '130px' }} />
    </div>
  );
}
