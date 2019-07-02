import React from 'react';
import Badge from '@material-ui/core/Badge';
import { BottomNavigation, BottomNavigationAction, createStyles, makeStyles, Theme } from '@material-ui/core';
import { StoreRounded, NearMeRounded, TextsmsRounded, AccountCircleRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '0 auto',
      width: '100%',
      position: 'fixed',
      bottom: '0px',
      borderTop: '1px solid #f0f0f0',
      height: '47px',
      color: '#fe4365',
    }
  })
);

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('consumer');
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
    document.getElementById('app-shared-menu-bottom-navigation-link-'+ newValue ).click();
  }
  return (
    <BottomNavigation showLabels value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="首页" value="consumer" icon={<StoreRounded />} />
      <Link id='app-shared-menu-bottom-navigation-link-consumer' to='/'/>
      <BottomNavigationAction label="附近" value="nearby" icon={<NearMeRounded />} />
      <Link id='app-shared-menu-bottom-navigation-link-nearby' to='/nearby'/>
      <BottomNavigationAction label="消息" value="information" icon={
        <Badge color="secondary" variant="dot"><TextsmsRounded /></Badge>}/>
      <Link id='app-shared-menu-bottom-navigation-link-information' to='/information'/>
      <BottomNavigationAction label="我的" value="personal" icon={<AccountCircleRounded />} />
      <Link id='app-shared-menu-bottom-navigation-link-personal' to='/personal'/>
    </BottomNavigation>
  );
}
