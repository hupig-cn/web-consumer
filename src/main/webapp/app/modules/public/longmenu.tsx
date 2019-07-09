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
import { toast } from 'react-toastify';

export const options = ['扫一扫', '付款', '收钱', '推荐好友'];

// tslint:disable-next-line: ter-arrow-body-style
export const ReLocation = () => {
  // @ts-ignore
  return lo + lc;
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
      minWidth: '0px',
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
      width: 'calc(100vw - 220px)',
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
        toast.info('提示：功能正在开发中.');
        break;
      case '收钱':
        document.getElementById('app-modules-consumer-quickaccess-button-link-incomepage').click();
        break;
      case '推荐好友':
        document.getElementById('app-modules-consumer-quickaccess-button-link-sharepage').click();
        break;
      default:
        toast.error('提示：操作错误.');
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
    const inputInput = document.getElementById('jh-longmenu-inputInput') as HTMLInputElement;
    const selects = document.getElementById('jh-longmenu-search') as HTMLDivElement;
    locationp.style.width = 0 + 'px';
    inputInput.style.width = 'calc(100vw - 135px)';
    selects.style.cssFloat = 'left';
  }
  function onSelectBlur() {
    const locationp = document.getElementById('jh-locations-address') as HTMLParagraphElement;
    const inputInput = document.getElementById('jh-longmenu-inputInput') as HTMLInputElement;
    const selects = document.getElementById('jh-longmenu-search') as HTMLDivElement;
    locationp.style.width = 85 + 'px';
    inputInput.style.width = 'calc(100vw - 220px)';
    selects.style.cssFloat = 'right';
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
            letterSpacing: '0px',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
          }}
        >
          <LocationOnRounded />
        </span>
        <p
          id="jh-locations-address"
          style={{
            fontSize: '0.9rem',
            margin: '5px 6px 0px 2px',
            float: 'left',
            color: '#fffde5',
            width: '85px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign: 'left',
            transition: '200ms',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            letterSpacing: '0.01071em'
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
            inputProps={{ 'aria-label': 'Search' }}
            onFocus={onSelectFocus}
            onBlur={onSelectBlur}
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
          />
        </div>
        <Menu
          style={{ backgroundColor: '#00000060' }}
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{ style: { maxHeight: '216px', width: 148, sIndex: 1001 } }}
        >
          {options.map(option => (
            // tslint:disable-next-line: jsx-no-lambda
            <MenuItem
              key={option}
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
