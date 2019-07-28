import React from 'react';
import { Link } from 'react-router-dom';
// tslint:disable-next-line: no-submodule-imports
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

export default function PrimarySearchAppBar(text) {
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
        <Link
          to={{
            pathname: `${text.back}`,
            productid: text.productid !== null ? text.productid : null,
            cards: text.cards !== null ? text.cards : null
          }}
        >
          <ArrowBackIos
            style={{
              float: 'left',
              fill: '#fffde5'
            }}
          />
        </Link>
        <span style={{ fontSize: '1rem', marginTop: '3px', marginLeft: '2px' }}>{text.name}</span>
        <span style={{ float: 'right', width: '5%', height: '5px' }} />
      </div>
    </div>
  );
}
