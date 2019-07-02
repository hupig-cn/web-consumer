import React from 'react';
import ReactDOM from 'react-dom';
import Badge from '@material-ui/core/Badge';
import { BottomNavigation, BottomNavigationAction, createStyles, makeStyles, Theme } from '@material-ui/core';
import { StoreRounded, NearMeRounded, TextsmsRounded, AccountCircleRounded } from '@material-ui/icons';
import Consumer from 'app/modules/consumer/consumer';
import Nearby from 'app/modules/nearby/nearby';
import Information from 'app/modules/information/information';
import Personal from 'app/modules/personal/personal';
import { Provider } from "react-redux";
import initStore from 'app/config/store';
import { registerLocale } from 'app/config/translation';

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
    }
  })
);

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('consumer');
  const container = document.getElementsByClassName('view-routes').item(0);
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
    let module : any = null;
    switch (newValue) {
      case 'consumer':
        module = <Consumer />;
        break;
      case 'nearby':
        module = <Nearby />;
        break;
      case 'information':
        module = <Information />;
        break;
      case 'personal':
        module = <Personal />;
        break;
    }
    ReactDOM.render(
      <Provider store={store}>
        {module}
      </Provider>,
      container);
  }
  return (
    <BottomNavigation showLabels value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="首页" value="consumer" icon={<StoreRounded />} />
        <BottomNavigationAction label="附近" value="nearby" icon={<NearMeRounded />} />
        <BottomNavigationAction label="消息" value="information" icon={
          <Badge color="secondary" variant="dot"><TextsmsRounded /></Badge>}/>
        <BottomNavigationAction label="我的" value="personal" icon={<AccountCircleRounded />} />
    </BottomNavigation>
  );
}
