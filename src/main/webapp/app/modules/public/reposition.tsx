import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// tslint:disable-next-line: no-submodule-imports
import Table from '@material-ui/core/Table';
// tslint:disable-next-line: no-submodule-imports
import TableBody from '@material-ui/core/TableBody';
// tslint:disable-next-line: no-submodule-imports
import TableCell from '@material-ui/core/TableCell';
// tslint:disable-next-line: no-submodule-imports
import TableRow from '@material-ui/core/TableRow';
// tslint:disable-next-line: no-submodule-imports
import Paper from '@material-ui/core/Paper';
import Selects from './selects';
// tslint:disable-next-line: no-submodule-imports
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Consumer from 'app/modules/consumer/consumer';

export const Title = () => {
  function goBack() {
    history.go(0);
  }

  return (
    <div
      style={{
        height: 35,
        width: '100vw',
        color: '#fffde5',
        backgroundColor: '#fe4365',
        padding: '5px 10px 0px 10px',
        position: 'fixed',
        top: 0,
        zIndex: 1000
      }}
    >
      <img
        onClick={goBack}
        src="./content/images/back.png"
        style={{
          width: '24px',
          height: '24px',
          float: 'left'
        }}
      />
      <span
        style={{
          float: 'left',
          fontSize: '1rem',
          marginTop: '3px',
          marginLeft: '2px',
          color: '#fffde5'
        }}
      >
        切换地区
      </span>
    </div>
  );
};

function createData(name: string, calories: string) {
  return { name, calories };
}

const rows = [
  createData('北京', 'B'),
  createData('天津', 'T'),
  createData('上海', 'S'),
  createData('深圳', 'S'),
  createData('广州', 'G'),
  createData('北京', 'B'),
  createData('天津', 'T'),
  createData('上海', 'S'),
  createData('深圳', 'S'),
  createData('广州', 'G'),
  createData('北京', 'B'),
  createData('天津', 'T'),
  createData('上海', 'S'),
  createData('深圳', 'S'),
  createData('广州', 'G'),
  createData('北京', 'B'),
  createData('天津', 'T'),
  createData('上海', 'S'),
  createData('深圳', 'S'),
  createData('广州', 'G')
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Title />
      <Selects />
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: '0px',
      overflowX: 'auto'
    },
    table: {
      minWidth: '0px'
    }
  })
);
