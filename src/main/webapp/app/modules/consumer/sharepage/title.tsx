import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
// tslint:disable-next-line: no-submodule-imports
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';

export default function PrimarySearchAppBar() {
  return (
    <div>
      <div
        style={{
          height: 35,
          width: '100vw',
          color: '#00000086',
          backgroundColor: 'transparent',
          padding: '5px 10px 0px 10px',
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          textAlign: 'center'
        }}
      >
        <Link to="/">
          <ArrowBackIos
            style={{
              float: 'left',
              fill: '#00000086'
            }}
          />
        </Link>
        <span style={{ fontSize: '1rem', marginTop: '3px', marginLeft: '2px' }}><b>分享有礼</b></span>
        <MoreHoriz
          style={{
            float: 'right'
          }}
        />
      </div>
    </div>
  );
}
