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
    },
    appbar: {
      height: '30px',
      backgroundColor: '#fe4365',
      position: 'fixed',
      top: '35px',
      zIndex: 1,
      '& div': {
        minHeight: '0px',
        height: '30px',
        '& div': {
          '& div': {
            '& button': {
              minHeight: '0px',
              height: '30px',
              marginTop: '-1px',
              '& span': {
                backgroundColor: 'transparent'
              },
              '& span:first-child': {
                backgroundColor: '#fe4365'
              }
            },
            '& button:hover': {
              outline: 'none',
              color: '#fffde5'
            },
            '& span': {
              backgroundColor: '#fffde5'
            }
          }
        }
      }
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
    <div ws-container-id="nearby-main" className={classes.root}>
      <AppBar ws-container-id="nearby-header" position="static" className={classes.appbar}>
        <Tabs ws-container-id="nearby-header-btn" value={value} onChange={handleChange}>
          <Tab label="附近热门" style={{ width: '33%', maxWidth: '100%' }} />
          <Tab label="距离最近" style={{ width: '34%', maxWidth: '100%' }} />
          <Tab label="积分最高" style={{ width: '33%', maxWidth: '100%' }} />
        </Tabs>
      </AppBar>
      <SwipeableViews ws-container-id="nearby-item" axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value}>
        <TabContainer dir={theme.direction}>0</TabContainer>
        <TabContainer dir={theme.direction}>1</TabContainer>
        <TabContainer dir={theme.direction}>2</TabContainer>
      </SwipeableViews>
    </div>
  );
}
