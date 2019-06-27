import React from 'react';
import { BottomNavigation, BottomNavigationAction, createStyles, makeStyles, Theme } from '@material-ui/core';
import { StoreRounded, NearMeRounded, TextsmsRounded, AccountCircleRounded } from '@material-ui/icons';
import Home from 'app/modules/home/home';
import Nearby from 'app/modules/nearby/nearby';
import Information from 'app/modules/information/information';
import Personal from 'app/modules/personal/personal';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from 'app/config/store';
import { registerLocale } from 'app/config/translation';
import Enddiv from './enddiv';
import Badge from '@material-ui/core/Badge';

export const bodyEl = document.getElementById('root');

const store = initStore();
registerLocale(store);

export const Loadpages = key => {
  var temp: any = null;
  switch (key) {
    case 'home':
      temp = <Home />;
      break;
    case 'nearby':
      temp = <Nearby />;
      break;
    case 'information':
      temp = <Information />;
      break;
    case 'personal':
      temp = <Personal />;
      break;
    default:
      temp = null;
      break;
  }
  ReactDOM.render(
    <Provider store={store}>
      {temp}
      <Enddiv />
    </Provider>,
    bodyEl
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '0 auto',
      width: '100%',
      position: 'fixed',
      bottom: '0px',
      borderTop: '1px solid #f0f0f0',
      height: '47px',
      '& button': {
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
      },
      '& svg': {
        paddingTop: '2px'
      },
      '& span': {
        minFontSize: '0.1rem',
        fontSize: '0.65rem'
      },
      '& span.Mui-selected': {
        minFontSize: '0.1rem',
        fontSize: '0.65rem',
        paddingTop: '0px'
      }
    },
    margin: {}
  })
);

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const classes = useStyles();
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
    setValue(newValue);
  }
  return (
    <BottomNavigation id="nav-bottoms" className={classes.root} showLabels value={value} onChange={handleChange}>
      <BottomNavigationAction label="首页" value="home" icon={<StoreRounded />} />
      <BottomNavigationAction label="附近" value="nearby" icon={<NearMeRounded />} />
      <BottomNavigationAction
        label="消息"
        value="information"
        icon={
          <Badge className={classes.margin} color="secondary" variant="dot">
            <TextsmsRounded />
          </Badge>
        }
      />
      <BottomNavigationAction label="我的" value="personal" icon={<AccountCircleRounded />} />
    </BottomNavigation>
  );
}
