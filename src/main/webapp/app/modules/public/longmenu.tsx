import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import IconButton from '@material-ui/core/IconButton';
// tslint:disable-next-line: no-submodule-imports
import Menu from '@material-ui/core/Menu';
// tslint:disable-next-line: no-submodule-imports
import MenuItem from '@material-ui/core/MenuItem';
// tslint:disable-next-line: no-submodule-imports
import MoreVertIcon from '@material-ui/icons/MoreVert';
// tslint:disable-next-line: no-submodule-imports
import { LocationOnRounded } from '@material-ui/icons';
// tslint:disable-next-line: no-submodule-imports
import InputBase from '@material-ui/core/InputBase';
// tslint:disable-next-line: no-submodule-imports
import SearchIcon from '@material-ui/icons/Search';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import Reposition from '../public/reposition';
import ReactDOM from 'react-dom';

export const options = ['扫一扫', '付款', '收钱', '推荐好友'];

export const ITEM_HEIGHT = 48;

export const ReLocation = () => {
  const locationp = document.getElementById('jh-locations-address') as HTMLParagraphElement;
  let city;
  try {
    // @ts-ignore
    city = window.weisen.getcity();
  } catch (e) {
    city = '定位失败';
  }
  if (null != locationp) {
    locationp.textContent = city;
  }
  return city;
};
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      marginTop: '4px',
      float: 'right',
      display: 'inline-block',
      minWidth: document.body.offsetWidth - 137 - 55 + 'px',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25)
      },
      marginRight: 'auto',
      height: '28px'
    },
    searchIcon: {
      width: theme.spacing(4.5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      display: 'inline-block',
      minWidth: '100%'
    },
    inputInput: {
      transition: '200ms',
      color: '#fffde5',
      width: document.body.offsetWidth - 137 - 55 - 17 + 'px',
      padding: theme.spacing(1, 1, 1, 1),
      marginLeft: '28px',
      height: '12px'
    }
  })
);

export const bodyEl = document.getElementById('root');

export const switchLocation = () => {
  ReactDOM.render(<Reposition />, bodyEl);
};

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const itemOnClick = keys => {
    switch (keys) {
      case '扫一扫':
        // @ts-ignore
        window.weisen.getscan();
        break;
      case '付款':
        alert('功能开发中');
        break;
      case '收钱':
        break;
      case '推荐好友':
        break;
      default:
        alert('操作错误');
        break;
    }
    setAnchorEl(null);
    return null;
  };

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function onSelectFocus() {
    const locationp = document.getElementById('jh-locations-address') as HTMLParagraphElement;
    const selects = document.getElementById('jh-longmenu-inputInput') as HTMLInputElement;
    locationp.style.width = 0 + 'px';
    selects.style.width = document.body.offsetWidth - 72 - 55 + 'px';
  }
  function onSelectBlur() {
    const locationp = document.getElementById('jh-locations-address') as HTMLParagraphElement;
    const selects = document.getElementById('jh-longmenu-inputInput') as HTMLInputElement;
    selects.style.width = document.body.offsetWidth - 137 - 55 + 'px';
    locationp.style.width = 65 + 'px';
  }

  return (
    <div style={{ height: '35px' }}>
      <div
        className="jh-longmenu"
        style={{ zIndex: 1000, height: '36px', lineHeight: '24px', backgroundColor: '#fe4365', position: 'fixed', width: '100%' }}
      >
        <span
          style={{
            float: 'left',
            marginTop: '6px',
            marginLeft: '6px',
            color: '#fffde5',
            height: '26px',
            fontSize: '0.875rem',
            letterSpacing: '0px'
          }}
        >
          <LocationOnRounded
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => {
              {
                ReLocation();
              }
            }}
          />
        </span>
        <p
          id="jh-locations-address"
          style={{
            fontSize: '0.9rem',
            marginTop: '8px',
            marginLeft: '2px',
            float: 'left',
            marginBottom: '0px',
            marginRight: '6px',
            color: '#fffde5',
            width: '65px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign: 'left',
            transition: '200ms'
          }}
        >
          <ReLocation />
        </p>
        <IconButton
          aria-label="More"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ outline: 'none', float: 'right', color: '#fffde5', padding: '0px', margin: '6px 6px 0px 6px' }}
        >
          <MoreVertIcon />
        </IconButton>
        <div className={classes.search} id="jh-longmenu-search">
          <div className={classes.searchIcon}>
            <SearchIcon style={{ fill: '#fffde5' }} />
          </div>
          <InputBase
            id="jh-longmenu-inputInput"
            placeholder="搜索..."
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
            inputProps={{ 'aria-label': 'Search' }}
            onFocus={onSelectFocus}
            onBlur={onSelectBlur}
          />
        </div>
        <Menu
          style={{ backgroundColor: '#00000060' }}
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: 148, sIndex: 1001 } }}
        >
          {options.map(option => (
            // tslint:disable-next-line: jsx-no-lambda
            <MenuItem
              keys={option}
              selected={option === 'Pyxis'}
              // tslint:disable-next-line: jsx-no-lambda
              onClick={() => {
                itemOnClick({ option }.option);
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}
