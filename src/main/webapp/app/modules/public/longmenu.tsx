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
import { Link } from 'react-router-dom';

export const options = ['扫一扫', '付款码', '收钱', '推荐好友'];

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
        typeof window.weisen === 'object' && window.weisen.getscan();
        // @ts-ignore
        window.webkit.messageHandlers.scannings.postMessage('');
        break;
      case '付款码':
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
    <div ws-container-id="nav-search-group" style={{ height: '35px', marginTop: '-5px' }}>
      <div
        className="jh-longmenu"
        style={{ zIndex: 1000, height: '36px', lineHeight: '24px', backgroundColor: '#fe4365', position: 'fixed', width: '100%' }}
      >
        <span
          ws-container-id="nav-locate-icon"
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
        {/* 定位地址 */}
        <p
          ws-container-id="nav-locate-address"
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
        {/* 更多 */}
        <IconButton
          ws-container-id="nav-more"
          aria-label="More"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ outline: 'none', float: 'right', color: '#fffde5', padding: '0px', margin: '10px 12px 0px 12px' }}
        >
          <img src="/content/theme/zihong/images/more_icon.png" />
          {/* <MoreVertIcon /> */}
        </IconButton>

        {/* 搜索 */}
        <div ws-container-id="nav-search" className={classes.search} id="jh-longmenu-search">
          <div ws-container-id="nav-search-icon" className={classes.searchIcon}>
            {/* <SearchIcon style={{ fill: '#fffde5' }} /> */}
            <img src="./content/theme/zihong/images/search_icon.png" />
          </div>
          <InputBase
            ws-container-id="nav-search-input"
            id="jh-longmenu-inputInput"
            placeholder="搜索..."
            inputProps={{ 'aria-label': 'Search' }}
            onFocus={onSelectFocus}
            onBlur={onSelectBlur}
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
          />
        </div>
        {/* 更多二级视图 */}
        <Menu
          style={{ backgroundColor: '#00000060' }}
          ws-container-id="nav-more-submenu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{ style: { maxHeight: '216px', width: 148, zIndex: 1001 } }}
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
      <Link id="app-modules-consumer-quickaccess-button-link-incomepage" to="/incomepage" />
      <Link id="app-modules-consumer-quickaccess-button-link-sharepage" to="/sharepage" />
    </div>
  );
}
