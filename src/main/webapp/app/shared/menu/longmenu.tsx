import './longmenu.scss';

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LocationOnRounded } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';

export const options = ['扫一扫', '付款', '收钱', '推荐好友'];

export const ITEM_HEIGHT = 48;

export const ReLocation = () => {
  let locationp = document.getElementById('jh-locations-address') as HTMLParagraphElement;
  try {
    // @ts-ignore
    var city = window.weisen.getcity();
  } catch (e) {
    var city = '定位失败';
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
  };

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function onSelectFocus() {
    let locationp = document.getElementById('jh-locations-address') as HTMLParagraphElement;
    let selects = document.getElementById('jh-longmenu-inputInput') as HTMLInputElement;
    locationp.style.width = 0 + 'px';
    selects.style.width = document.body.offsetWidth - 72 - 55 + 'px';
  }
  function onSelectBlur() {
    let locationp = document.getElementById('jh-locations-address') as HTMLParagraphElement;
    let selects = document.getElementById('jh-longmenu-inputInput') as HTMLInputElement;
    selects.style.width = document.body.offsetWidth - 137 - 55 + 'px';
    locationp.style.width = 65 + 'px';
  }

  return (
    <div id="jh-jh-longmenu">
      <div className="jh-longmenu">
        <LocationOnRounded
          id="jh-locations"
          onClick={() => {
            {
              ReLocation();
            }
          }}
        />
        <p
          id="jh-locations-address"
          style={{
            fontSize: '0.9rem',
            marginTop: '8px',
            marginLeft: '2px'
          }}
          onClick={() => {
            {
              ReLocation();
            }
          }}
        >
          <ReLocation />
        </p>
        <IconButton id="buttns" aria-label="More" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <div className={classes.search} id="jh-longmenu-search">
          <div className={classes.searchIcon} id="jh-longmenu-icon">
            <SearchIcon id="jh-searchicon-id-longmenu" />
          </div>
          <InputBase
            id="jh-longmenu-inputInput"
            placeholder="搜索..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'Search' }}
            onFocus={() => {
              onSelectFocus();
            }}
            onBlur={() => {
              onSelectBlur();
            }}
          />
        </div>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 148,
              sIndex: 1001
            }
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
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
