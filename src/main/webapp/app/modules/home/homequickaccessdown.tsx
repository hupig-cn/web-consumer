import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      backgroundColor:'#ffffff',
      height: '100%',
      '& button':{
        outline: 'none',
        color:'rgba(0, 0, 0, 0.75)',
        height: '100%',
        '& img':{
          marginBottom: 5,
          width: 28,
          height:28,
        },
      },
    },
  }),
);

export const Loadpages = key => {
  var temp:any = null;
  switch (key) {
    case "key1":
      break;
    case "key2":
      break;
    case "key3":
      break;
    case "key4":
      break;
    case "key5":
      break;
    case "key6":
      break;
    case "key7":
      break;
    case "key8":
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
    <div style={{
      paddingTop: '12px',
      backgroundColor: 'white',
    }}>
      <BottomNavigation
        showLabels
        className={classes.root}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="积分精选" value="key1" icon={<img src = "./content/images/icon1.png" />} />
        <BottomNavigationAction label="热门促销" value="key2" icon={<img src = "./content/images/icon2.png" />} />
        <BottomNavigationAction label="团购" value="key3" icon={<img src = "./content/images/icon3.png" />} />
        <BottomNavigationAction label="出行" value="key4" icon={<img src = "./content/images/icon4.png" />} />
      </BottomNavigation>
      <BottomNavigation
        showLabels
        className={classes.root}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="充值" value="key5" icon={<img src = "./content/images/icon5.png" />} />
        <BottomNavigationAction label="积分夺宝" value="key6" icon={<img src = "./content/images/icon6.png" />} />
        <BottomNavigationAction label="签到" value="key7" icon={<img src = "./content/images/icon7.png" />} />
        <BottomNavigationAction label="更多服务" value="key8" icon={<img src = "./content/images/icon8.png" />} />
      </BottomNavigation>
    </div>
  );
}
