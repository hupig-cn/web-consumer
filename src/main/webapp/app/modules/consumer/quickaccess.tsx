import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import CropFreeRounded from '@material-ui/icons/CropFreeRounded';
// tslint:disable-next-line: no-submodule-imports
import MonetizationOnOutlined from '@material-ui/icons/MonetizationOnOutlined';
// tslint:disable-next-line: no-submodule-imports
import AssignmentReturnedOutlined from '@material-ui/icons/AssignmentReturnedOutlined';
// tslint:disable-next-line: no-submodule-imports
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import { toast } from 'react-toastify';

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

export const Loadpages = (key: string) => {
  // tslint:disable-next-line: no-var-keyword
  let temp: any = null;
  switch (key) {
    case 'scan':
      // @ts-ignore
      typeof window.weisen === 'object' && window.weisen.getscan();
      break;
    case 'pay':
      toast.info('提示：功能正在开发中.');
      break;
    case 'income':
      document.getElementById('app-modules-consumer-quickaccess-button-link-incomepage').click();
      break;
    case 'share':
      document.getElementById('app-modules-consumer-quickaccess-button-link-sharepage').click();
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
  const bottomimg = {
    width: '32px',
    margin: '5px 0px'
  };
  return (
    <div ws-container-id="nav-quick-tools" className="jh-consumer-quickaccess" style={{ marginTop: '-5px' }}>
      {/* <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
          <BottomNavigationAction label="扫一扫" value="scan" icon={<CropFreeRounded />} />
          <BottomNavigationAction label="付款码" value="pay" icon={<MonetizationOnOutlined />} />
          <BottomNavigationAction label="收钱" value="income" icon={<AssignmentReturnedOutlined />} />
          <BottomNavigationAction label="推荐好友" value="share" icon={<ShareOutlined />} />
        </BottomNavigation> */}
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="扫一扫"
          value="scan"
          icon={<img style={bottomimg} src="./content/theme/zihong/images/tools_scan.png" />}
        />
        <BottomNavigationAction
          label="付款码"
          value="pay"
          icon={<img style={bottomimg} src="./content/theme/zihong/images/tools_pay.png" />}
        />
        <BottomNavigationAction
          label="收 &nbsp; 钱"
          value="income"
          icon={<img style={bottomimg} src="./content/theme/zihong/images/tools_income.png" />}
        />
        <BottomNavigationAction
          label="推荐好友"
          value="share"
          icon={<img style={bottomimg} src="./content/theme/zihong/images/tools_share.png" />}
        />
      </BottomNavigation>
    </div>
  );
}
