import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#ffffff',
      height: '100%',
      display: 'inline-block',
      '& button,& a': {
        outline: 'none',
        color: 'rgba(0, 0, 0, 0.75)',
        height: '100%',
        minWidth: '25%',
        fontWeight: 'normal',
        textDecoration: 'none',
        '& img': {
          marginBottom: 5,
          width: 28,
          height: 28
        }
      }
    }
  })
);

export const Loadpages = key => {
  let temp: any = null;
  switch (key) {
    case 'key1':
    case 'key2':
    case 'key3':
    case 'key4':
    case 'key5':
    case 'key6':
    case 'key7':
      toast.info('功能正在开发中.');
      break;
    case 'key8':
      break;
    default:
      temp = null;
      toast.info('没有发现这个功能.');
      break;
  }
};

export default function LongMenu() {
  // @ts-ignore
  const classes = useStyles();
  const [value] = React.useState('home');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
  }
  const bottomhomeimg = {
    width: '26px',
    height: '26px',
    marginTop: '5px'
  };

  return (
    <div ws-container-id="normal-service-link" style={{ marginTop: '10px', paddingBottom: '8px', backgroundColor: 'white' }}>
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="积分精选"
          value="key1"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon1.png" />}
        />
        <BottomNavigationAction
          label="热门促销"
          value="key2"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon2.png" />}
        />
        <BottomNavigationAction
          label="团购"
          value="key3"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon3.png" />}
        />
        <BottomNavigationAction
          label="出行"
          value="key4"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon4.png" />}
        />
        <BottomNavigationAction
          label="充值"
          value="key5"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon5.png" />}
        />
        <BottomNavigationAction
          label="积分夺宝"
          value="key6"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon6.png" />}
        />
        <BottomNavigationAction
          label="签到"
          value="key7"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon7.png" />}
        />
        <BottomNavigationAction
          href="/aboutus"
          label="用户答疑"
          value="key8"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon8.png" />}
        />
      </BottomNavigation>
    </div>
  );
}
