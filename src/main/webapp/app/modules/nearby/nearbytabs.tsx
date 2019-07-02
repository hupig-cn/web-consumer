import './nearbytabs.scss';

import React from 'react';
import PropTypes from 'prop-types';
// tslint:disable-next-line: no-submodule-imports
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import AppBar from '@material-ui/core/AppBar';
// tslint:disable-next-line: no-submodule-imports
import Tabs from '@material-ui/core/Tabs';
// tslint:disable-next-line: no-submodule-imports
import Tab from '@material-ui/core/Tab';
// tslint:disable-next-line: no-submodule-imports
import Typography from '@material-ui/core/Typography';
// tslint:disable-next-line: no-submodule-imports
import Nearbylistbox from './nearbylistbox';
import SwipeableViews from 'react-swipeable-views';

// tslint:disable-next-line: interface-name
interface TabContainerProps {
  children?: React.ReactNode;
  dir?: string;
}

export const Setlistbox = keys => {
  let temp: any = null;
  switch (keys) {
    case '0':
      temp = <Nearbylistbox />;
      break;
    case '1':
      temp = <Nearbylistbox />;
      break;
    case '2':
      temp = <Nearbylistbox />;
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
          <Tab label="附近热门" style={{ width: '33%' }} />
          <Tab label="距离最近" style={{ width: '34%' }} />
          <Tab label="积分最高" style={{ width: '33%' }} />
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value}>
        <TabContainer dir={theme.direction}>0</TabContainer>
        <TabContainer dir={theme.direction}>1</TabContainer>
        <TabContainer dir={theme.direction}>2</TabContainer>
      </SwipeableViews>
    </div>
  );
}
