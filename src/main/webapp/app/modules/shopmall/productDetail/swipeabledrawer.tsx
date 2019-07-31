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
import { Pathname } from 'history';

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
export let number = '';

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
    number: ''
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
        <img style={{ height: '120px', width: '100px' }} src={props.img} />
        <ChevronRightRounded style={{ float: 'right' }} />
        <p style={{ float: 'right', fontSize: '2rem' }}>¥{props.price}</p>
        {/*<p style={{ right: '30px', bottom: '0px', position: 'absolute' }}>库存：{props.num}件</p>*/}
      </div>
      <div>
        <p style={{ paddingLeft: '15px' }}>
          商品规格：
          <span style={{ paddingLeft: '15px' }}>{props.json}</span>
        </p>
        <p style={{ paddingLeft: '15px' }}>
          商品型号：
          <span style={{ paddingLeft: '15px' }}>{props.model}</span>
        </p>
        <p style={{ paddingLeft: '15px' }}>
          换购数量：
          <button
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => downValue()}
          >
            -
          </button>
          <span id="inputNumber" style={{ paddingLeft: '10px', marginLeft: '-3px', marginRight: '5px' }}>
            1
          </span>
          <button
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => upValue()}
          >
            +
          </button>
        </p>
      </div>
      <Divider />
      <div className={classes.mydiv}>
        <span style={{ textAlign: 'center', display: 'block' }}>{props.integral} 积分兑换</span>
        <ChevronRightRounded style={{ float: 'right' }} />
        {/*<div style={{ right: '15px', bottom: '10px', position: 'absolute' }}>*/}
        {/*<Switch />*/}
        {/*</div>*/}
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
          onClick={() => createOrder()}
        >
          确认购买
        </button>
      </div>
    </div>
  );
  function createOrder() {
    number = document.getElementById('inputNumber').innerText;
    document.getElementById('app-modules-consumer-quickaccess-button-link-createOrder').click();
  }
  function downValue() {
    const value = document.getElementById('inputNumber').innerText;
    // tslint:disable-next-line: radix
    if (parseInt(value) !== 1) {
      // @ts-ignore
      document.getElementById('inputNumber').innerText = value - 1;
      // @ts-ignore
      setState({
        number: document.getElementById('inputNumber').innerText
      });
    }
  }
  function upValue() {
    const value = document.getElementById('inputNumber').innerText;
    // @ts-ignore
    // tslint:disable-next-line: radix
    document.getElementById('inputNumber').innerText = parseInt(value) + 1;
    // @ts-ignore
    setState({
      number: document.getElementById('inputNumber').innerText
    });
  }
  return (
    <div>
      <Button
        style={{
          borderRadius: '0px 20px 20px 0px',
          float: 'right',
          backgroundColor: '#fe4365',
          color: '#ffffff',
          margin: '10px 10px 5px 0px',
          width: '100px',
          fontSize: '0.8rem',
          height: '35px'
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
          height: '35px'
        }}
        onClick={toggleDrawer('bottom', true)}
      >
        加入购物车
      </Button>
      <SwipeableDrawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)} onOpen={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </SwipeableDrawer>
      <Link
        id="app-modules-consumer-quickaccess-button-link-createOrder"
        to={{ pathname: '/createOrder', state: { integral: props.integral, img: props.img, productid: props.productid } }}
      />
    </div>
  );
}
