import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import GridList from '@material-ui/core/GridList';
// tslint:disable-next-line: no-submodule-imports
import GridListTile from '@material-ui/core/GridListTile';
// tslint:disable-next-line: no-submodule-imports
import GridListTileBar from '@material-ui/core/GridListTileBar';
// tslint:disable-next-line: no-submodule-imports
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#f0f0f0'
    },
    gridList: {
      height: '100%'
    },
    listTitle: {
      '& div': {
        borderRadius: '5px 5px 0px 0px',
        '& img': {
          top: 0,
          left: 0,
          width: '100%',
          transform: 'translateY(0%)'
        },
        '& div': {
          borderRadius: '0px 0px 5px 5px',
          backgroundColor: '#ffffff',
          color: '#00000095',
          position: 'sticky',
          '& div': {
            '& div': {
              marginTop: '-22px',
              float: 'left',
              color: '#fe4365',
              width: '100%',
              padding: '0px 6px 1px 2px'
            },
            '& div:first-child': {
              marginTop: '0px',
              color: '#00000095',
              fontSize: '0.85rem',
              padding: 0
            }
          },
          '& button': {
            '& span': {
              transform: 'translateY(0%)'
            }
          }
        }
      }
    },
    icon: {
      color: '#00000095'
    },
    titlebar: {
      '& div': {
        color: '#123000095'
      },
      '& div:first-child': {
        marginLeft: 3,
        marginRight: 3,
        height: '100%',
        width: 'calc(100% - 6px)',
        display: 'block',
        '& span': {
          '& span': {
            fontSize: 20
          }
        }
      }
    }
  })
);

const tileData = [
  {
    img: './content/images/commodity1.png',
    title: '【官网价直降1111元】Apple/苹果 iPhone XR 256G 移动联通电信4G手机双卡双待苹果XR iPhonexr',
    author: '6488.00'
  },
  {
    img: './content/images/commodity2.png',
    title: 'Dior/迪奥口红烈艳蓝金旗舰唇膏999 520 740 888 女 哑光滋润',
    author: '316.00'
  },
  {
    img: './content/images/commodity3.png',
    title: 'poryuu孕妇口红专用孕妇化妆品孕妇护肤品怀孕期彩妆唇膏哺乳',
    author: '299.99'
  },
  {
    img: './content/images/commodity4.png',
    title: '分期Apple/苹果 iPhone XS Max苹果xsmax苹果XR双卡正品手机国行8',
    author: '4008.00'
  },
  {
    img: './content/images/commodity5.png',
    title: 'Apple/苹果 iPhone 8 Plus 4G全网通 美版国行8代 无锁苹果8plus',
    author: '3980.00'
  }
];

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} style={{ margin: -0, width: '97%' }}>
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            className={classes.listTitle}
            style={{ height: '100%', width: '50%', maxWidth: '100%', maxHeight: '100%', padding: 4 }}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={
                <p
                  style={{
                    wordBreak: 'break-all',
                    whiteSpace: 'pre-wrap',
                    wordWrapL: 'break-word',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    lineHeight: '19px',
                    height: '2.4rem',
                    fontSize: '0.8rem',
                    position: 'relative',
                    margin: '0px'
                  }}
                >
                  {tile.title}
                </p>
              }
              subtitle={
                <span style={{ float: 'left', width: '100%' }}>
                  <span style={{ float: 'left' }}>
                    <span style={{ fontSize: '0.65rem' }}>￥:</span>
                    {tile.author}
                  </span>
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                    style={{ height: '100%', outline: 'none', padding: 0, float: 'right', bottom: '5px' }}
                  >
                    …
                  </IconButton>
                </span>
              }
              className={classes.titlebar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
