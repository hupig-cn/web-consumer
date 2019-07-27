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
      '& button': {
        outline: 'none',
        color: 'rgba(0, 0, 0, 0.75)',
        height: '100%',
        minWidth: '25%',
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
    toast.info('提示：功能正在开发中.');

    window.location.replace(
      'alipays://platformapi/startapp?' +
        'appId=20000067&' +
        'url=https%3A%2F%2Fopenapi.alipay.com%2Fgateway.do%3Falipay_sdk%3Dalipay-sdk-java-3.1.' +
        '0%26app_id%3D2019061965597545%26biz_content%3D%257B%2522body%2522%253A%2522%2522%252C%2522out_' +
        'trade_no%2522%253A%2522201907262005183943691768%2522%252C%2522product_code%2522%253A%2522QUICK_' +
        'WAP_WAY%2522%252C%2522subject%2522%253A%2522%25E5%259C%2586%25E7%25A7%25AF%25E5%2588%2586%25E6%25B6%2588%25E8%25B4%25B9%252C%25E7%25A5%259D%25E4%25BD%25A0%25E7%2594%259F%25E6%25B4%25BB%25E6%2584%2589%25E5%25BF%25AB%252C%25E8%25AF%25A6%25E6%2583%2585%25E5%2595%2586%25E5%2593%2581%25E4%25BF%25A1%25E6%2581%25AF%25E8%25AF%25B7%25E5%259C%25A8APP%25E5%2586%2585%25E6%259F%25A5%25E7%259C%258B%2522%252C%2522timeout_express%2522%253A%25222m%2522%252C%2522total' +
        '_amount%2522%253A%25220.10%2522%257D%26charset%3Dutf-8%26format%3DJSON%26method%3Dalipay.trade.wap.pay%26notify_' +
        'url%3Dhttp%253A%252F%252Fkalle2017.iok.la%252Fapi%252Fpublic%252Falipay%252Freturn13%26return_url%3Dhttp%253A%252F%252Fapp.yuanscore.com%253A9090%252Fapi%252Fpublic%252Fnotify%26sign%3DcghuD1wcD9F5dZCo3cGiyzOBE7RxTFeipBFgcVbx%252F88c8dBy2sahTRpQjAaHAc6Wp7ssZKqwls%252BVKhgclQ%252Fp7pXG%252F%252Fdr0KO0V5akIRaayI8G%252FnB2JOwBhzOs%252F8UDkTe0JWwyBs%252BNCackH3jrhaCbIT1sPGaZ846ia2YkgGzB%252B1wNW8BrHO7J2R8b49mGwylWEl%252BebGBvrAHYKyObwkPnmzbe0WDAsn7RUXx7SmK2HewxPhAeeMse0I7vJe%252FG1%252FvB7RzoYuDVPuU3Gon1BYE8sFzPAzP9hB1M7rBZJPib2kKuN8CtvZPCHixqb3fe%252F4jWMymVLqKe5Y75AdSb0j0PyQ%253D%253D%26sign_type%3DRSA2%26timestamp%3D2019-07-' +
        '26%2B20%253A05%253A31%26version%3D1.0'
    );
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
          label="更多服务"
          value="key8"
          icon={<img style={bottomhomeimg} src="./content/theme/zihong/images/icon8.png" />}
        />
      </BottomNavigation>
    </div>
  );
}
