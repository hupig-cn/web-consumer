import React from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { Link } from "react-router-dom";

export default function PrimarySearchAppBar() {
  return (
    <div>
      <div
        style={{
          height: 35,
          width: '100vw',
          color: '#fffde5',
          backgroundColor: '#fe4365',
          padding: '5px 10px 0px 10px',
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          textAlign: "center"
        }}
      >
        <Link to='/'>
        <ArrowBackIos style={{
          float: "left",
          fill: '#fffde5'
        }}/>
        </Link>
        <span style={{  fontSize: '1rem', marginTop: '3px', marginLeft: '2px', color: '#fffde5' }}>园积分收款</span>
        <MoreHoriz style={{
          float: "right"
        }}/>
      </div>
    </div>
  );
}
