import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import PaymentRounded from '@material-ui/icons/PaymentRounded';
import MoveToInboxRounded from '@material-ui/icons/MoveToInboxRounded';
import ThumbsUpDownRounded from '@material-ui/icons/ThumbsUpDownRounded';
import RateReviewRounded from '@material-ui/icons/RateReviewRounded';
import EventNoteRounded from '@material-ui/icons/EventNoteRounded';
import initStore from 'app/config/store';
import { registerLocale } from 'app/config/translation';
import VipService from 'app/modules/personal/vipservice';

const store = initStore();
registerLocale(store);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#ffffff',
      height: '100%',
      borderTop: '1px solid #f0f0f0',
      '& button': {
        minWidth: '0px',
        outline: 'none',
        color: 'rgba(0, 0, 0, 0.64)',
        height: '100%',
        '& img': {
          marginBottom: 5,
          width: 28,
          height: 28
        }
      }
    },
    divTitleName: {
      '& span': {
        margin: '0px 10px 5px 10px',
        fontSize: '0.9rem'
      }
    }
  })
);

export const Loadpages = key => {};

export default function LongMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
    setValue(newValue);
  }

  return (
    <div style={{ paddingTop: '12px', backgroundColor: 'white', borderBottom: '1px solid #f0f0f0' }}>
      <div className={classes.divTitleName}>
        <span style={{ float: 'left' }}>我的订单</span>
      </div>
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction label="待支付" value="key1" icon={<PaymentRounded />} />
        <BottomNavigationAction label="待收货" value="key2" icon={<MoveToInboxRounded />} />
        <BottomNavigationAction label="待评价" value="key3" icon={<ThumbsUpDownRounded />} />
        <BottomNavigationAction label="售后退款" value="key4" icon={<RateReviewRounded />} />
        <BottomNavigationAction label="我的订单" value="order" icon={<EventNoteRounded />} />
      </BottomNavigation>
      <img
        src="./content/images/profit.png"
        style={{ width: '100%', height: '55px', padding: '5px', borderRadius: '10px', marginTop: '10px' }}
      />
      <VipService />
    </div>
  );
}
