import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
// tslint:disable-next-line: no-submodule-imports
import { Link } from 'react-router-dom';

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
          textAlign: 'center'
        }}
      >
        <Link to="/createOrder">
          <ArrowBackIos
            style={{
              float: 'left',
              fill: '#fffde5'
            }}
          />
        </Link>
        <span style={{ fontSize: '1rem', marginTop: '3px', marginLeft: '2px', color: '#fffde5' }}>地址</span>
        <span style={{ float: 'right' }}>新增</span>
      </div>
    </div>
  );
}
