import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor:'#ffffff',
      height: '100%',
      borderTop: '1px solid #f0f0f0',
      '& button':{
        minWidth: '0px',
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
    divTitleName:{
      '& span':{
        margin:'0px 10px 5px 10px',
        fontSize: '0.9rem',
      },
    },
    image: {
      width: '50%',
      height: '100px',
      float: 'left',
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    gridItem:{
      width:'100%',
      marginTop: '26px',
      backgroundColor: '#ffffff',
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
      borderBottom: '1px solid #f0f0f0',
    }}>
      <div className={classes.divTitleName}>
        <span style={{float:"left",}}>我的工具</span>
        <span style={{float:"right", fontSize: '0.65rem', color:'#00000075',}}>全部工具 ></span>
      </div>
      <div className={classes.gridItem}>
      <Grid item>
        <ButtonBase className={classes.image} style={{outline:"none",}}>
          <span style={{float:"left",}}>U先试用</span>
          <span>大牌免费优先试用</span>
          <img className={classes.img} alt="complex" src="./content/images/vip1.png" />
        </ButtonBase>
      </Grid>
        <Grid item>
          <ButtonBase className={classes.image} style={{outline:"none",}}>
            <div style={{width:'100%',}}>
            <span>U先试用</span>
            <span>大牌免费优先试用</span>
            </div>
            <img className={classes.img} alt="complex" src="./content/images/vip1.png" />
          </ButtonBase>
        </Grid>
      </div>
    </div>
  );
}
