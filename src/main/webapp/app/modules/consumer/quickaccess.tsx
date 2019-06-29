import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CropFreeRounded from '@material-ui/icons/CropFreeRounded';
import MonetizationOnOutlined from '@material-ui/icons/MonetizationOnOutlined';
import AssignmentReturnedOutlined from '@material-ui/icons/AssignmentReturnedOutlined';
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import Homequickaccessdown from './homequickaccessdown';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      backgroundColor: '#fe4365',
      height: '100%',
      '& button': {
        marginTop: 4,
        outline: 'none',
        marginBottom: 4,
        color: '#fffde5',
        fill: '#fffde5',
        height: '100%'
      },
      '& svg': {
        width: 30,
        height: 30
      },
      '& span': {
        marginTop: 3
      }
    }
  })
);

export const Loadpages = key => {
  var temp: any = null;
  switch (key) {
    case 'scan':
      // @ts-ignore
      window.weisen.getscan();
      break;
    case 'pay':
      break;
    case 'income':
      break;
    case 'share':
      break;
    default:
      temp = null;
      break;
  }
};

export default function LongMenu() {
  const classes = useStyles();
  const [value] = React.useState('home');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
  }

  return (
    <div className="jh-consumer-quickaccess">
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction label="扫一扫" value="scan" icon={<CropFreeRounded />} />
        <BottomNavigationAction label="付款码" value="pay" icon={<MonetizationOnOutlined />} />
        <BottomNavigationAction label="收钱" value="income" icon={<AssignmentReturnedOutlined />} />
        <BottomNavigationAction label="推荐好友" value="share" icon={<ShareOutlined />} />
      </BottomNavigation>
      <Homequickaccessdown />
    </div>
  );
}
