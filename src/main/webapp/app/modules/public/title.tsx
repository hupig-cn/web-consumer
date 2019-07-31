import React from 'react';
import { Link } from 'react-router-dom';
// tslint:disable-next-line: no-submodule-imports
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

export default function PrimarySearchAppBar(text) {
  // ������ͨ��߶�
  const titleHeight = '50px';

  let infostyle = { float: 'right', width: '5%', height: '5px' };
  let info = <span style={infostyle} />;

  if (text.infoname) {
    // @ts-ignore
    infostyle = { position: 'fixed', right: '10px', lineHeight: titleHeight, height: titleHeight, color: '#fff' };
    info = text.infoname;
    if (text.infoto) {
      info = (
        <Link style={{ height: titleHeight, lineHeight: titleHeight, color: '#fff', fontSize: '0.9rem' }} to={text.infoto}>
          {info}
        </Link>
      );
    }
    info = <span style={infostyle}>{info}</span>;
  }
  return (
    <div ws-container-id="title">
      <div
        style={{
          height: titleHeight,
          lineHeight: titleHeight,
          width: '100vw',
          color: '#fffde5',
          backgroundColor: '#fe4365',
          padding: '0px 10px',
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          textAlign: 'center'
        }}
      >
        <Link
          to={{
            pathname: `${text.back}`,
            state: {
              productid: text.productid ? text.productid : undefined,
              cards: text.cards ? text.cards : undefined,
              bigorder: text.bigorder ? text.bigorder : undefined
            }
          }}
        >
          <ArrowBackIos
            style={{
              float: 'left',
              fill: '#fffde5',
              height: titleHeight,
              lineHeight: titleHeight
            }}
          />
        </Link>
        <span style={{ fontSize: '1rem', marginTop: '3px', marginLeft: '2px' }}>{text.name}</span>
        {info}
      </div>
      <div
        style={{
          height: titleHeight,
          width: '100vw',
          margin: 0,
          padding: 0,
          border: 'none'
        }}
      />
    </div>
  );
}
