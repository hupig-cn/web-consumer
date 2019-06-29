import React from 'react';
import { BottomNavigation, BottomNavigationAction, createStyles, makeStyles, Theme } from '@material-ui/core';
import { StoreRounded, NearMeRounded, TextsmsRounded, AccountCircleRounded } from '@material-ui/icons';
import Consumer from 'app/modules/consumer/consumer';
import Nearby from 'app/modules/nearby/nearby';
import Information from 'app/modules/information/information';
import Personal from 'app/modules/personal/personal';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from 'app/config/store';
import { registerLocale } from 'app/config/translation';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

export const bodyEl = document.getElementsByClassName('jh-body');

const store = initStore();
registerLocale(store);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '0 auto',
      width: '100%',
      position: 'fixed',
      bottom: '0px',
      borderTop: '1px solid #f0f0f0',
      height: '47px',
      textAlign: 'center',
      '& a': {
        width: '100%',
        '& button': {
          outline: 'none',
          minWidth: '50px',
          paddingBottom: '0px',
          paddingTop: '0px',
          height: '46px'
        },
        '& button.Mui-selected': {
          color: '#fe4365',
          fontSize: '0.65rem',
          paddingTop: '0px',
          outline: 'none'
        }
      },
      '& svg': {
        paddingTop: '2px'
      },
      '& span': {
        minFontSize: '0.1rem',
        fontSize: '0.65rem',
        opacity: '1'
      },
      '& span.Mui-selected': {
        minFontSize: '0.1rem',
        fontSize: '0.65rem',
        paddingTop: '0px'
      }
    }
  })
);

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('consumer');
  const classes = useStyles();
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <BottomNavigation id="nav-bottoms" className={classes.root} showLabels value={value} onChange={handleChange}>
      <Link to="/">
        <BottomNavigationAction style={{ paddingTop: '0px' }} label="首页" value="consumer" icon={<StoreRounded />} />
      </Link>
      <Link to="/nearby">
        <BottomNavigationAction style={{ paddingTop: '0px' }} label="附近" value="nearby" icon={<NearMeRounded />} />
      </Link>
      <Link to="/information">
        <BottomNavigationAction
          style={{ paddingTop: '0px' }}
          label="消息"
          value="information"
          icon={
            <Badge color="secondary" variant="dot">
              <TextsmsRounded />
            </Badge>
          }
        />
      </Link>
      <Link to="/personal">
        <BottomNavigationAction style={{ paddingTop: '0px' }} label="我的" value="personal" icon={<AccountCircleRounded />} />
      </Link>
    </BottomNavigation>
  );
}
