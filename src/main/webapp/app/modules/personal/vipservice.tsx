import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Mytool from 'app/modules/personal/mytool';

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
        color: 'rgba(0, 0, 0, 0.75)',
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

export const Loadpages = key => {
  var temp: any = null;
  switch (key) {
    case 'key1':
      break;
    case 'key2':
      break;
    case 'key3':
      break;
    case 'key4':
      break;
    case 'key5':
      break;
    case 'key6':
      break;
    case 'key7':
      break;
    case 'key8':
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
    <div
      style={{
        paddingTop: '12px',
        backgroundColor: 'white',
        borderBottom: '1px solid #f0f0f0',
        marginTop: '10px'
      }}
    >
      <div className={classes.divTitleName}>
        <span style={{ float: 'left' }}>VIP服务</span>
        <span style={{ float: 'right', fontSize: '0.65rem', color: '#00000075' }}>更多 ></span>
      </div>
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction label="账户安全" value="key1" icon={<img src="./content/images/vip1.png" />} />
        <BottomNavigationAction label="账号绑定" value="key2" icon={<img src="./content/images/vip2.png" />} />
        <BottomNavigationAction label="合伙人" value="key3" icon={<img src="./content/images/vip3.png" />} />
        <BottomNavigationAction label="我要合作" value="key4" icon={<img src="./content/images/vip4.png" />} />
      </BottomNavigation>
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction label="客服中心" value="key5" icon={<img src="./content/images/vip5.png" />} />
        <BottomNavigationAction label="积分明细" value="key6" icon={<img src="./content/images/vip6.png" />} />
        <BottomNavigationAction label="我的佣金" value="key7" icon={<img src="./content/images/vip7.png" />} />
        <BottomNavigationAction label="问题反馈" value="key8" icon={<img src="./content/images/vip8.png" />} />
      </BottomNavigation>
      <Mytool />
    </div>
  );
}
