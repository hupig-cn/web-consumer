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
import IconButton from '@material-ui/core/IconButton';
// tslint:disable-next-line: no-submodule-imports
import ShoppingCartRounded from '@material-ui/icons/ShoppingCartRounded';
// tslint:disable-next-line: no-submodule-imports
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import Orders from './orders';
import { Link, Route } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';
import { red } from "@material-ui/core/colors";

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
      margin: '10px 0px 0px 15px',
      float: 'left',
      fill: '#fffde5',
      width: '50px',
      height: '50px'
    },
    namePlusSetting: {
      width: 'calc(100% - 70px)',
      height: '60px',
      float: 'right',
      padding: '14px 10px 0px 0px'
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
      float: 'left'
    },
    login: {
      color: '#fffde5',
      float: 'left',
      fontSize: '0.7rem'
    },
  })
);

export const Loadpages = key => {
  let temp: any = null;
  switch (key) {
    case 'scan':
      break;
    case 'pay':
      break;
    case 'income':
      break;
    case 'share':
      break;
    default:
      temp = null;
      break;
  }
};

export default function LongMenu() {
  const classes = useStyles();
  const [value] = React.useState('home');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
  }

  function login() {
    alert('登录');
  }

  function handleUnfinishedOnClick() {
    alert('功能正在开发中');
  }
  return (
    <div>
      <div style={{ backgroundColor: '#fe4365', height: '60px', position: 'fixed', top: '0px', width: '100%', zIndex: 1000 }}>
        <Avatar alt="photo" src="./content/images/user.png" className={classes.bigAvatar} />
        <div className={classes.namePlusSetting}>
          <div className={classes.nameOne}>
            <Link to="/login" className="alert-link" style={{
              textAlign:"center",
            }}>
              <p
                style={{
                  borderRadius: '5px',
                  backgroundColor: '#fffde5',
                  color: '#fe4365',
                  height: '45px',
                  fontSize: '1.4rem',
                  padding: '6px',
                  marginBottom: '0px'
                }}>立即登录</p>
            </Link>
            <span className={classes.name} onClick={login}>
              昵称（VIP）
            </span>
            <IconButton color="primary" aria-label="setting" style={{ padding: '0px', float: 'right', outline: 'none' }}>
              <SettingsRounded />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="setting"
              style={{ marginRight: '10px', padding: '0px', float: 'right', outline: 'none' }}>
              <ShoppingCartRounded />
            </IconButton>
          </div>
          <div className={classes.login}>13800138000</div>
        </div>
      </div>
      <BottomNavigation
        onClick={handleUnfinishedOnClick}
        style={{ position: 'fixed', top: '60px', height: 'auto', zIndex: 1000 }}
        showLabels
        className={classes.root}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="积分" value="scan" icon={'0'} />
        <BottomNavigationAction label="余额" value="pay" icon={'0.00'} />
        <BottomNavigationAction label="优惠卷" value="share" icon={'0'} />
      </BottomNavigation>
      <div style={{ height: '130px' }} />
      <Orders />
    </div>
  );
}
