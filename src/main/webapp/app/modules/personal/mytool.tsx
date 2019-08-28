import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import Grid from '@material-ui/core/Grid';
// tslint:disable-next-line: no-submodule-imports
import ButtonBase from '@material-ui/core/ButtonBase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

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

const tutorialSteps = [
  {
    label: '个人信息',
    test: '个人信息更完善',
    imgPath: './content/images/tool1.png',
    pathId: 'app-modules-personal-mytool-button-link-key1',
    toPath: '/mysettings'
  },
  {
    label: '实名认证',
    test: '我的账户更安全',
    imgPath: './content/images/tool2.png',
    pathId: 'app-modules-personal-mytool-button-link-key2',
    toPath: '/mysettings'
  },
  {
    label: '密码盒子',
    test: '我的密码管理器',
    imgPath: './content/images/tool3.png',
    pathId: 'app-modules-personal-mytool-button-link-key3',
    toPath: '/mysettings'
  },
  {
    label: '邀请好友',
    test: '分享还有好礼送',
    imgPath: './content/images/tool4.png',
    pathId: 'app-modules-personal-mytool-button-link-key4',
    toPath: '/sharepage'
  },
  {
    label: '下单有礼',
    test: '下单赢红包好礼',
    imgPath: './content/images/tool5.png',
    pathId: 'app-modules-personal-mytool-button-link-key5',
    toPath: '/personal'
  },
  {
    label: '领卷中心',
    test: '领取大额优惠卷',
    imgPath: './content/images/tool6.png',
    pathId: 'app-modules-personal-mytool-button-link-key6',
    toPath: '/personal'
  }
];

export default function LongMenu() {
  const classes = useStyles();

  function handleChange() {
    toast.info('提示：功能正在开发中.');
  }

  function jumpToPath(pathId) {
    document.getElementById(pathId).click();
    return null;
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
            <Link id={step.pathId} to={step.toPath} />
            <ButtonBase className={classes.image} style={{ outline: 'none' }}>
              <div
                className={classes.buttonBaseDiv}
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => {
                  document.getElementById(step.pathId).click();
                }}
              >
                <span>{step.label}</span>
                <span style={{ fontSize: '0.8rem' }}>{step.test}</span>
              </div>
              <img className={classes.img} alt="complex" src={step.imgPath} />
            </ButtonBase>
          </Grid>
        ))}
      </div>
    </div>
  );
}
