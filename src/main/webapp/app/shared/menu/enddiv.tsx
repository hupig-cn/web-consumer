import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 46,
      float: 'left',
      width: '100vw',
    },
  }),
);

export default function TitlebarGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    </div>
  );
}
