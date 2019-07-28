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
  document.getElementById('app-modules-personal-vipservice-navigation-link-' + key).click();
  if (key === 'key3') {
    window.location.replace('http://app.yuanscore.com:8083');
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
        {/*<Link id="app-modules-personal-vipservice-navigation-link-" to="/" />*/}
        <BottomNavigationAction label="账号绑定" value="key2" icon={<img src="./content/images/vip2.png" />} />
        {/*<Link id="app-modules-personal-vipservice-navigation-link-" to="/" />*/}
        <BottomNavigationAction label="推荐" value="key3" icon={<img src="./content/images/vip3.png" />} />
        {/*<Link id="app-modules-personal-vipservice-navigation-link-" to="/" />*/}
        <BottomNavigationAction label="商家" value="upmerchant" icon={<img src="./content/images/vip4.png" />} />
        <Link id="app-modules-personal-vipservice-navigation-link-upmerchant" to="/upmerchant" />
        <BottomNavigationAction label="客服中心" value="key5" icon={<img src="./content/images/vip5.png" />} />
        {/*<Link id="app-modules-personal-vipservice-navigation-link-" to="/" />*/}
        <BottomNavigationAction label="积分明细" value="key6" icon={<img src="./content/images/vip6.png" />} />
        {/*<Link id="app-modules-personal-vipservice-navigation-link-" to="/" />*/}
        <BottomNavigationAction label="我的佣金" value="key7" icon={<img src="./content/images/vip7.png" />} />
        {/*<Link id="app-modules-personal-vipservice-navigation-link-" to="/" />*/}
        <BottomNavigationAction label="问题反馈" value="feedback" icon={<img src="./content/images/vip8.png" />} />
        <Link id="app-modules-personal-vipservice-navigation-link-feedback" to="/feedback" />
      </BottomNavigation>
    </div>
  );
}
