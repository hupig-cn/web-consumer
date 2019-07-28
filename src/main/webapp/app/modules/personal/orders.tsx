import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import PaymentRounded from '@material-ui/icons/PaymentRounded';
// tslint:disable-next-line: no-submodule-imports
import MoveToInboxRounded from '@material-ui/icons/MoveToInboxRounded';
// tslint:disable-next-line: no-submodule-imports
import ThumbsUpDownRounded from '@material-ui/icons/ThumbsUpDownRounded';
// tslint:disable-next-line: no-submodule-imports
import RateReviewRounded from '@material-ui/icons/RateReviewRounded';
// tslint:disable-next-line: no-submodule-imports
import EventNoteRounded from '@material-ui/icons/EventNoteRounded';
import { Link } from 'react-router-dom';

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
        },
        '& span.Mui-selected': {
          fontSize: '0.75rem'
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

export const Loadpages = key => {
  let temp: any = null;
  switch (key) {
    case 'key1':
      break;
    case 'key2':
      break;
    case 'key3':
      break;
    case 'key4':
      break;
    case 'order':
      document.getElementById('app-modules-consumer-quickaccess-button-link-orderlist').click();
      break;
    default:
      temp = null;
      break;
  }
};

export default function orderLongMenu() {
  const classes = useStyles();
  const [value] = React.useState('personal');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
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
        <BottomNavigationAction
          style={{
            backgroundColor: '#f0f0f0',
            color: '#fe4365',
            fill: '#fe4365'
          }}
          label="我的订单"
          value="order"
          icon={<EventNoteRounded />}
        />
      </BottomNavigation>
      <Link id="app-modules-consumer-quickaccess-button-link-orderlist" to="/order" />
    </div>
  );
}
