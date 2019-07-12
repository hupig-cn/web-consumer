import React from 'react';
import { BottomNavigation, BottomNavigationAction, createStyles, makeStyles, Theme, Badge } from '@material-ui/core';
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
      lineHeight: '18px',
      '& button': {
        minWidth: '50px',
        paddingBottom: '0px',
        paddingTop: '0px',
        height: '46px',
        '& span': {
          minFontSize: '0.1rem',
          fontSize: '0.65rem',
          '& svg': {
            paddingTop: '2px'
          }
        }
      },
      '& button.Mui-selected': {
        color: '#fe4365',
        fontSize: '0.65rem',
        paddingTop: '0px',
        outline: 'none',
        '& span.Mui-selected': {
          minFontSize: '0.1rem',
          fontSize: '0.65rem',
          paddingTop: '0px'
        }
      }
    }
  })
);

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('consumer');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
    document.getElementById('app-shared-menu-bottom-navigation-link-' + newValue).click();
  }

  return (
    <BottomNavigation showLabels value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="首页" value="consumer" icon={
        <Badge color="default" variant="dot"><StoreRounded/></Badge>}/>
      <Link id="app-shared-menu-bottom-navigation-link-consumer" to="/"/>
      <BottomNavigationAction label="附近" value="nearby" icon={
        <Badge color="default" variant="dot"><NearMeRounded/></Badge>}/>
      <Link id="app-shared-menu-bottom-navigation-link-nearby" to="/nearby"/>
      <BottomNavigationAction label="消息" value="information" icon={
        <Badge color="default" variant="dot"><TextsmsRounded/></Badge>}/>
      <Link id="app-shared-menu-bottom-navigation-link-information" to="/information"/>
      <BottomNavigationAction label="我的" value="personal" icon={
        <Badge color="default" variant="dot"><AccountCircleRounded/></Badge>}/>
      <Link id="app-shared-menu-bottom-navigation-link-personal" to="/personal"/>
    </BottomNavigation>
  );
}
