import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const messages = [
  {
    id: 1,
    primary: '【官网价直降1111元】Apple/苹果 iPhone XR 256G 移动联通电信4G手机双卡双待苹果XR iPhonexr',
    star: '4.9',
    sale: '90',
    distance: '38分钟 4.0km',
    consumption: '人均 ￥69 积分 50%',
    person: './content/images/commodity1.jpg',
    price: '6488.00'
  },
  {
    id: 2,
    primary: '分期Apple/苹果 iPhone XS Max苹果xsmax苹果XR双卡正品手机国行8',
    star: '4.4',
    sale: '826',
    distance: '36分钟 3.5km',
    consumption: '人均 ￥23 积分 30%',
    person: './content/images/commodity4.jpg',
    price: '4008.00'
  },
  {
    id: 3,
    primary: 'Apple/苹果 iPhone 8 Plus 4G全网通 美版国行8代 无锁苹果8plus',
    star: '4.0',
    sale: '2394',
    distance: '38分钟 4.5km',
    consumption: '人均 ￥23 积分 50%',
    person: './content/images/commodity5.jpg',
    price: '3980.00'
  },
  {
    id: 4,
    primary: '【官网价直降1111元】Apple/苹果 iPhone XR 256G 移动联通电信4G手机双卡双待苹果XR iPhonexr',
    star: '4.3',
    sale: '796',
    distance: '41分钟 4.6km',
    consumption: '人均 ￥21 积分 50%',
    person: './content/images/commodity1.jpg',
    price: '6488.00'
  },
  {
    id: 5,
    primary: '分期Apple/苹果 iPhone XS Max苹果xsmax苹果XR双卡正品手机国行8',
    star: '4.5',
    sale: '2634',
    distance: '30分钟 2.5km',
    consumption: '人均 ￥37 积分 15%',
    person: './content/images/commodity4.jpg',
    price: '4008.00'
  },
  {
    id: 6,
    primary: 'Apple/苹果 iPhone 8 Plus 4G全网通 美版国行8代 无锁苹果8plus',
    star: '3.5',
    sale: '7981',
    distance: '35分钟 3.5km',
    consumption: '人均 ￥17 积分 50%',
    person: './content/images/commodity5.jpg',
    price: '3980.00'
  },
  {
    id: 7,
    primary: '【官网价直降1111元】Apple/苹果 iPhone XR 256G 移动联通电信4G手机双卡双待苹果XR iPhonexr',
    star: '4.5',
    sale: '1449',
    distance: '40分钟 5.1km',
    consumption: '人均 ￥80 积分 30%',
    person: './content/images/commodity1.jpg',
    price: '6488.00'
  },
  {
    id: 8,
    primary: '分期Apple/苹果 iPhone XS Max苹果xsmax苹果XR双卡正品手机国行8',
    star: '4.3',
    sale: '3421',
    distance: '43分钟 4.0km',
    consumption: '人均 ￥28 积分 50%',
    person: './content/images/commodity4.jpg',
    price: '4008.00'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0)
    },
    paper: {
      paddingBottom: 0
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

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {messages.map(({ id, primary, star, sale, distance, consumption, person, price }) => (
            <React.Fragment key={id}>
              <ListItem button style={{ borderBottom: '1px solid #f0f0f0' }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Profile Picture"
                    src={person}
                    style={{
                      borderRadius: 0,
                      width: 75,
                      height: 100,
                      marginRight: 10
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  style={{
                    margin: '0 auto',
                    height: '100px',
                    position: 'relative'
                  }}
                  primary={primary}
                  secondary={
                    <React.Fragment>
                      <span
                        style={{
                          float: 'right',
                          position: 'absolute',
                          bottom: 0,
                          left: '80%'
                        }}
                      >
                        ¥{price}
                      </span>
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
