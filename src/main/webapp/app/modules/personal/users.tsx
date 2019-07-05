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
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
export default function LongMenu(props) {
  const classes = useStyles();
  const [value] = React.useState('home');
  const { login, account } = props;
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
    toast.info('提示：功能正在开发中.');
  }
  return (
    <div>
      {login ? (
        <div style={{ backgroundColor: '#fe4365', height: '60px', position: 'fixed', top: '0px', width: '100%', zIndex: 1000 }}>
          <Avatar alt="photo" src="./content/images/user.png" className={classes.bigAvatar} />
          <div className={classes.namePlusSetting}>
            <div className={classes.nameOne}>
              <span className={classes.name}>{account.firstName}</span>
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
            <div className={classes.login}>{account.login}</div>
          </div>
        </div>
      ) : (
        <Link
          to="/login"
          className="alert-link"
          style={{
            textAlign: 'center'
          }}
        >
          <p
            style={{
              position: 'fixed',
              top: '0px',
              backgroundColor: '#fe4365',
              color: '#fffde5',
              height: '60px',
              fontSize: '1.4rem',
              padding: '15px',
              marginBottom: '0px',
              width: '100%',
              zIndex: 1000
            }}
          >
            注册/登录
          </p>
        </Link>
      )}
      <BottomNavigation
        style={{ position: 'fixed', top: '58px', height: 'auto', zIndex: 1000 }}
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
    </div>
  );
}
