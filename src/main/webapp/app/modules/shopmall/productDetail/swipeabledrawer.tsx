import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// tslint:disable-next-line: no-submodule-imports
import Button from '@material-ui/core/Button';
// tslint:disable-next-line: no-submodule-imports
import Divider from '@material-ui/core/Divider';
// tslint:disable-next-line: no-submodule-imports
import ChevronRightRounded from '@material-ui/core/SvgIcon/SvgIcon';
// tslint:disable-next-line: no-submodule-imports
import Switch from '@material-ui/core/Switch';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  mydiv: {
    backgroundColor: '#ffffff',
    padding: '15px 5px 15px 15px',
    margin: '1px 0px',
    position: 'relative'
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false
  });

  type DrawerSide = 'bottom';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = (side: DrawerSide) => (
    <div className={classes.fullList} role="presentation" onClick={toggleDrawer(side, true)} onKeyDown={toggleDrawer(side, false)}>
      <div className={classes.mydiv}>
        <img style={{ height: '120px', width: '100px' }} src={'http://img0.imgtn.bdimg.com/it/u=2519501909,294206455&fm=26&gp=0.jpg'} />
        <ChevronRightRounded style={{ float: 'right' }} />
        <p style={{ float: 'right' }}>¥863.00</p>
        <p style={{ right: '30px', bottom: '0px', position: 'absolute' }}>库存：666件</p>
      </div>
      <div>
        <p style={{ paddingLeft: '15px' }}>
          商品规格：
          <span style={{ paddingLeft: '15px' }}>1.5m×1.8m</span>
          <span style={{ paddingLeft: '15px' }}>1.2m×1.5m</span>
          <span style={{ paddingLeft: '15px' }}>1.5m×2m</span>
        </p>
        <p style={{ paddingLeft: '15px' }}>
          商品型号：
          <span style={{ paddingLeft: '15px' }}>单床</span>
          <span style={{ paddingLeft: '15px' }}>单床 + 乳胶垫</span>
        </p>
        <p style={{ paddingLeft: '15px' }}>
          换购数量：
          <span style={{ paddingLeft: '15px' }}>- 10 +</span>
        </p>
      </div>
      <Divider />
      <div className={classes.mydiv}>
        <span>460 积分兑换</span>
        <ChevronRightRounded style={{ float: 'right' }} />
        <div style={{ right: '15px', bottom: '10px', position: 'absolute' }}>
          <Switch />
        </div>
      </div>
      {/*<div className={classes.mydiv}>*/}
      {/*  <span>收货地址：请选择收货地址</span>*/}
      {/*  <ChevronRightRounded style={{ float: 'right' }} />*/}
      {/*  <span style={{ float: 'right' }}>></span>*/}
      {/*</div>*/}
      {/*<Divider />*/}
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <button
          type="button"
          style={{
            backgroundColor: '#fe4365',
            width: '80%',
            color: 'white',
            margin: '5px 0px',
            borderRadius: '20px',
            zIndex: 1002,
            fontSize: '1rem',
            height: '38px'
          }}
          // tslint:disable-next-line: jsx-no-lambda
          onClick={() => choosePayWay()}
        >
          确认购买
        </button>
      </div>
    </div>
  );

  function choosePayWay() {
    document.getElementById('app-modules-consumer-quickaccess-button-link-choosepayway').click();
    return null;
  }

  return (
    <div>
      <Button
        style={{
          borderRadius: '0px 20px 20px 0px',
          float: 'right',
          backgroundColor: '#fe4365',
          color: '#ffffff',
          margin: '10px 20px 5px 0px',
          width: '100px',
          fontSize: '0.8rem',
          height: '30px'
        }}
        onClick={toggleDrawer('bottom', true)}
      >
        立即购买
      </Button>
      <Button
        style={{
          borderRadius: '20px 0px 0px 20px',
          float: 'right',
          backgroundColor: '#fe9f1f',
          color: '#ffffff',
          margin: '10px 0px 5px 0px',
          width: '100px',
          fontSize: '0.8rem',
          height: '30px'
        }}
        onClick={toggleDrawer('bottom', true)}
      >
        加入购物车
      </Button>
      <SwipeableDrawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)} onOpen={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </SwipeableDrawer>
      <Link id="app-modules-consumer-quickaccess-button-link-choosepayway" to="/choosepayway" />
    </div>
  );
}
