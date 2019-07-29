import './ordertabs.scss';

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
import Orderlistbox from './orderlistbox';
import SwipeableViews from 'react-swipeable-views';
import Title from 'app/modules/public/title';

// tslint:disable-next-line: interface-name
interface TabContainerProps {
  children?: React.ReactNode;
  dir?: string;
  deliver?: [];
  value: number;
}

export const Setlistbox = (keys, deliver, value) => {
  let temp: any = null;
  switch (value) {
    case 1:
      temp = <Orderlistbox messages={deliver.getUnpaidOrderList} />;
      break;
    case 2:
      temp = <Orderlistbox messages={deliver.getPaidOrderList} />;
      break;
    case 3:
      temp = <Orderlistbox messages={deliver.getRefundOrderList} />;
      break;
    case 0:
      temp = <Orderlistbox messages={deliver.getAllOrderList} />;
      break;
    default:
      temp = <p>Error</p>;
      break;
  }
  return temp;
};

function TabContainer({ children, dir, deliver, value }: TabContainerProps) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 0, marginTop: 30 }}>
      {Setlistbox(children, deliver, value)}
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

export default function SimpleTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const start = props.status;
  const [value, setValue] = React.useState(start);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div>
      <Title name="订单列表" back="/personal" />
      <div className={classes.root}>
        <AppBar position="static" id="jh-appbar">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="全部" style={{ width: '25%' }} />
            <Tab label="待付款" style={{ width: '25%' }} />
            <Tab label="待发货" style={{ width: '25%' }} />
            <Tab label="已退款" style={{ width: '25%' }} />
          </Tabs>
        </AppBar>
        <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value}>
          <TabContainer dir={theme.direction} deliver={props} value={0}>
            0
          </TabContainer>
          <TabContainer dir={theme.direction} deliver={props} value={1}>
            1
          </TabContainer>
          <TabContainer dir={theme.direction} deliver={props} value={2}>
            2
          </TabContainer>
          <TabContainer dir={theme.direction} deliver={props} value={3}>
            3
          </TabContainer>
        </SwipeableViews>
      </div>
    </div>
  );
}
