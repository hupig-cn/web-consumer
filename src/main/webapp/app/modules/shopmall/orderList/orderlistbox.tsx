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
  // {
  //   id: 1,
  //   primary: '【官网价直降1111元】Apple/苹果 iPhone XR 256G 移动联通电信4G手机双卡双待苹果XR iPhonexr',
  //   star: '4.9',
  //   sale: '90',
  //   distance: '38分钟 4.0km',
  //   consumption: '人均 ￥69 积分 50%',
  //   person: './content/images/commodity1.jpg',
  //   price: '6488.00'
  // }
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
