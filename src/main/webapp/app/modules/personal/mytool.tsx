import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

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
    },
    image: {
      width: '50%',
      height: '80px',
      float: 'left',
      padding: '15px 25px 15px 30px'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    },
    gridItem: {
      width: '100%',
      marginTop: '26px',
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    },
    buttonBaseDiv: {
      '& span': {
        float: 'left',
        width: '100%',
        textAlign: 'left'
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
    default:
      temp = null;
      break;
  }
};

let tutorialSteps = [
  {
    label: '个人信息',
    test: '个人信息更完善',
    imgPath: './content/images/tool1.png'
  },
  {
    label: '实名认证',
    test: '我的账户更安全',
    imgPath: './content/images/tool2.png'
  },
  {
    label: '密码盒子',
    test: '我的密码管理器',
    imgPath: './content/images/tool3.png'
  },
  {
    label: '成为商家',
    test: '我的收益我知道',
    imgPath: './content/images/tool4.png'
  },
  {
    label: '下单有礼',
    test: '下单赢红包好礼',
    imgPath: './content/images/tool5.png'
  },
  {
    label: '领卷中心',
    test: '领取大额优惠卷',
    imgPath: './content/images/tool6.png'
  }
];

export default function LongMenu() {
  const classes = useStyles();
  const [value] = React.useState('home');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    Loadpages(newValue);
  }

  return (
    <div style={{ paddingTop: '12px', backgroundColor: 'white', borderBottom: '1px solid #f0f0f0', marginTop: '10px' }}>
      <div className={classes.divTitleName}>
        <span style={{ float: 'left' }}>我的工具</span>
        <span style={{ float: 'right', fontSize: '0.65rem', color: '#00000075' }}>全部工具 ></span>
      </div>
      <div className={classes.gridItem}>
        {tutorialSteps.map((step, index) => (
          <Grid item>
            <ButtonBase className={classes.image} style={{ outline: 'none' }}>
              <div className={classes.buttonBaseDiv}>
                <span>{step.label}</span>
                <span style={{ fontSize: '0.25rem' }}>{step.test}</span>
              </div>
              <img className={classes.img} alt="complex" src={step.imgPath} />
            </ButtonBase>
          </Grid>
        ))}
      </div>
    </div>
  );
}
