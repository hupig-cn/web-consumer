import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartRounded from '@material-ui/icons/ShoppingCartRounded';
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import Orders from './orders';
import { Link, Route } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

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
    }
  })
);

export const Loadpages = key => {
  var temp: any = null;
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

  return (
    <div>
      <div style={{ backgroundColor: '#fe4365', height: '60px', position: 'fixed', top: '0px', width: '100%', zIndex: 1000 }}>
        <Avatar alt="photo" src="./content/images/user.png" className={classes.bigAvatar} />
        <div className={classes.namePlusSetting}>
          <div className={classes.nameOne}>
            <span className={classes.name} onClick={login}>
              昵称（VIP）
            </span>
            <Route>
              <div>
                <Alert color="warning">
                  <Link to="/login" className="alert-link">
                    <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
                  </Link>
                </Alert>
              </div>
            </Route>
            <IconButton color="primary" aria-label="setting" style={{ padding: '0px', float: 'right', outline: 'none' }}>
              <SettingsRounded />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="setting"
              style={{ marginRight: '10px', padding: '0px', float: 'right', outline: 'none' }}
            >
              <ShoppingCartRounded />
            </IconButton>
          </div>
          <div className={classes.login}>13800138000</div>
        </div>
      </div>
      <BottomNavigation
        style={{ position: 'fixed', top: '60px', height: 'auto', zIndex: 1000 }}
        showLabels
        className={classes.root}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="积分" value="scan" icon={'225'} />
        <BottomNavigationAction label="余额" value="pay" icon={'751.00'} />
        <BottomNavigationAction label="优惠卷" value="share" icon={'360'} />
      </BottomNavigation>
      <div style={{ height: '130px' }} />
      <Orders />
    </div>
  );
}
