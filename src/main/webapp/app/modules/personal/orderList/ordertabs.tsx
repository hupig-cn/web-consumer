import './ordertabs.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Orderlistbox from './orderlistbox';
import SwipeableViews from 'react-swipeable-views';

interface TabContainerProps {
  children?: React.ReactNode;
  dir?: string;
}

export const Setlistbox = keys => {
  var temp: any = null;
  switch (keys) {
    case '0':
      temp = <Orderlistbox />;
      break;
    case '1':
      temp = <Orderlistbox />;
      break;
    case '2':
      temp = <Orderlistbox />;
      break;
    case '3':
      temp = <Orderlistbox />;
      break;
    case '4':
      temp = <Orderlistbox />;
      break;
    default:
      temp = <p>Error</p>;
      break;
  }
  return temp;
};

function TabContainer({ children, dir }: TabContainerProps) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 0, marginTop: 30 }}>
      {Setlistbox(children)}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      height: '100%'
    }
  })
);

export default function SimpleTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" id="jh-appbar">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="全部" style={{ width: '20%' }} />
          <Tab label="待付款" style={{ width: '20%' }} />
          <Tab label="待发货" style={{ width: '20%' }} />
          <Tab label="待收货" style={{ width: '20%' }} />
          <Tab label="待评价" style={{ width: '20%' }} />
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChange}>
        <TabContainer dir={theme.direction}>0</TabContainer>
        <TabContainer dir={theme.direction}>1</TabContainer>
        <TabContainer dir={theme.direction}>2</TabContainer>
        <TabContainer dir={theme.direction}>3</TabContainer>
        <TabContainer dir={theme.direction}>4</TabContainer>
      </SwipeableViews>
    </div>
  );
}
