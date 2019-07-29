import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import CssBaseline from '@material-ui/core/CssBaseline';
// tslint:disable-next-line: no-submodule-imports
import Typography from '@material-ui/core/Typography';
// tslint:disable-next-line: no-submodule-imports
import Paper from '@material-ui/core/Paper';
// tslint:disable-next-line: no-submodule-imports
import List from '@material-ui/core/List';
// tslint:disable-next-line: no-submodule-imports
import ListItem from '@material-ui/core/ListItem';
// tslint:disable-next-line: no-submodule-imports
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// tslint:disable-next-line: no-submodule-imports
import ListItemText from '@material-ui/core/ListItemText';
// tslint:disable-next-line: no-submodule-imports
import Avatar from '@material-ui/core/Avatar';

const messages = [
  {
    id: 1,
    primary: '探虾迹小龙虾（蟹·烧烤·市桥店）',
    star: '4.9',
    sale: '90',
    distance: '38分钟 4.0km',
    consumption: '人均 ￥69 积分 50%',
    person: './content/images/shop1.png'
  },
  {
    id: 2,
    primary: '德州汉堡（市桥黄编店）',
    star: '4.4',
    sale: '826',
    distance: '36分钟 3.5km',
    consumption: '人均 ￥23 积分 30%',
    person: './content/images/shop2.png'
  },
  {
    id: 3,
    primary: '华莱士炸鸡汉堡（市桥店）',
    star: '4.0',
    sale: '2394',
    distance: '38分钟 4.5km',
    consumption: '人均 ￥23 积分 50%',
    person: './content/images/shop3.png'
  },
  {
    id: 4,
    primary: '菠萝油港澳餐厅',
    star: '4.3',
    sale: '796',
    distance: '41分钟 4.6km',
    consumption: '人均 ￥21 积分 50%',
    person: './content/images/shop4.png'
  },
  {
    id: 5,
    primary: '广州麦当劳光明北得来速餐厅',
    star: '4.5',
    sale: '2634',
    distance: '30分钟 2.5km',
    consumption: '人均 ￥37 积分 15%',
    person: './content/images/shop5.png'
  },
  {
    id: 6,
    primary: '开心花甲粉（市桥店）',
    star: '3.5',
    sale: '7981',
    distance: '35分钟 3.5km',
    consumption: '人均 ￥17 积分 50%',
    person: './content/images/shop6.png'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0)
    },
    paper: {
      paddingBottom: 0,
      marginTop: '66px'
    },
    list: {
      fontFamily: '黑体',
      padding: 0
    },
    subheader: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      top: 'auto',
      bottom: 0
    },
    grow: {
      flexGrow: 1
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    inline: {
      display: 'inline'
    }
  })
);

export default function BottomAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {props.messages.map(({ id, ordercode, createdate, orderstatus, sum, consumption, person }) => (
            <React.Fragment key={id}>
              <ListItem button style={{ borderBottom: '1px solid #f0f0f0' }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Profile Picture"
                    src={'./content/images/shop1.png'}
                    style={{
                      borderRadius: 20,
                      width: 75,
                      height: 100,
                      marginRight: 10
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  style={{ margin: '0 auto', height: '100px', position: 'relative' }}
                  primary={ordercode}
                  secondary={
                    <React.Fragment>
                      <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                        <span style={{ fontSize: '1.5rem', color: '#fe4365' }}>¥{sum}</span> （订单状态：
                        {orderstatus === '1' ? '未支付' : '已支付'}）
                      </Typography>
                      <span style={{ float: 'right' }}>{consumption}</span>
                      <span style={{ float: 'left', position: 'absolute', bottom: 0, left: 0 }}>{createdate}</span>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
