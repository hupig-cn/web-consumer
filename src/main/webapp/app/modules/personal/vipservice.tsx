import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigation from '@material-ui/core/BottomNavigation';
// tslint:disable-next-line: no-submodule-imports
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#ffffff',
      height: '100%',
      borderTop: '1px solid #f0f0f0',
      display: 'inline-block',
      '& button': {
        minWidth: '25%',
        outline: 'none',
        color: '#000000',
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
  // tslint:disable-next-line: switch-default
  switch (key) {
    case 'key1':
      toast.info('提示：功能正在开发中.');
      break;
    case 'key2':
      toast.info('提示：功能正在开发中.');
      break;
    case 'key3':
      toast.info('提示：功能正在开发中.');
      break;
    case 'key4':
      toast.info('提示：功能正在开发中.');
      break;
    case 'key5':
      document.getElementById('app-modules-personal-vipservice-BottomNavigation-BottomNavigationAction-link').click();
      break;
    case 'key6':
      toast.info('提示：功能正在开发中.');
      break;
    case 'key7':
      toast.info('提示：功能正在开发中.');
      break;
    case 'key8':
      toast.info('提示：功能正在开发中.');
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
    <div style={{ paddingTop: '12px', backgroundColor: 'white', borderBottom: '1px solid #f0f0f0', marginTop: '10px' }}>
      <div className={classes.divTitleName}>
        <span style={{ float: 'left' }}>VIP服务</span>
        <span style={{ float: 'right', fontSize: '0.65rem', color: '#00000075' }}>更多 ></span>
      </div>
      <BottomNavigation showLabels className={classes.root} value={value} onChange={handleChange}>
        <BottomNavigationAction label="账户安全" value="key1" icon={<img src="./content/images/vip1.png" />} />
        <BottomNavigationAction label="账号绑定" value="key2" icon={<img src="./content/images/vip2.png" />} />
        <BottomNavigationAction label="合伙人" value="key3" icon={<img src="./content/images/vip3.png" />} />
        <BottomNavigationAction label="商家" value="key4" icon={<img src="./content/images/vip4.png" />} />
        <BottomNavigationAction label="测试按钮" value="key5" icon={<img src="./content/images/vip5.png" />} />
        <BottomNavigationAction label="积分明细" value="key6" icon={<img src="./content/images/vip6.png" />} />
        <BottomNavigationAction label="我的佣金" value="key7" icon={<img src="./content/images/vip7.png" />} />
        <BottomNavigationAction label="问题反馈" value="key8" icon={<img src="./content/images/vip8.png" />} />
      </BottomNavigation>
      <Link id="app-modules-personal-vipservice-BottomNavigation-BottomNavigationAction-link" to="/mydomos" />
    </div>
  );
}
